import { Handler } from 'aws-lambda';
import fetch from 'node-fetch';
import {GeoPoint} from '../../src/lib/model/geo-point'
import { env } from '$amplify/env/fill-address-table';
import { generateClient } from 'aws-amplify/data';
import { type Schema } from '../data/resource'
import {Amplify} from 'aws-amplify'
import {createAddress} from './graphql/mutations'
import { v3 } from 'uuid'
import {listAddresses} from './graphql/queries'

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: 'identityPool'
      }
    }
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
        },
      },
    },
  }
);

const dataClient = generateClient<Schema>();

export const handler: Handler = async (event) => {
  let existingHouseIndex: Set<string> = new Set()
  const { data: {listAddresses: {items: existingHouses}}, errors } = await dataClient.graphql({
    query: listAddresses
  })

  for (let existingHouse of existingHouses) {
    existingHouseIndex.add(existingHouse.id)
  }

  const body = 'data=' + encodeURIComponent(`
    [bbox:53.810420,10.435688,53.958749,10.954792][out:json];
    (
      way(53.810420,10.435688,53.958749,10.954792)["addr:postcode"="23554"]["addr:housenumber"];
    );
    out body;>;out skel qt;
  `)

  const response = await fetch('https://overpass-api.de/api/interpreter', {method: 'POST', body});
  const result = await response.json() as any;

  let houses: any = []
  let nodesById: any = {}

  result.elements.forEach((element: any) => {
    if (element?.type === 'way') {
      houses.push(element);
      return
    }

    nodesById[element.id] = [element.lat, element.lon]
  })

  for (let house of houses) {
    let uniqueName = (house.tags['addr:postcode'] + house.tags['addr:street'] + house.tags['addr:housenumber'])
      .toLowerCase()
      .replace(/ß/g, 'ss')
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/[^a-zA-Z0-9]/g, '')

    let id = v3(uniqueName, env.UUID_NAMESPACE)
    if (existingHouseIndex.has(id)) {
      console.log('ID EXISTS', id)
      continue
    }

    console.log('WRITE ID', id)
    let center: GeoPoint = GeoPoint.calculateCenter(
      house.nodes.map((nodeId: any) => new GeoPoint(nodesById[nodeId][0],nodesById[nodeId][1]))
    )

    try{
      await dataClient.graphql({
        query: createAddress,
        variables: {
          input: {
            id,
            street: house.tags['addr:street'],
            housenumber: house.tags['addr:housenumber'],
            postcode: house.tags['addr:postcode'],
            latitude: center.lat,
            longitude: center.lon
          },
        },
      })
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  return 'Success'
}