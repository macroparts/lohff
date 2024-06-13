import { Handler } from 'aws-lambda';
import fetch from 'node-fetch';

class GeoPoint {
  private readonly latRadians: number;
  private readonly lonRadians: number;

  constructor(public readonly lat: number, public readonly lon: number) {
    this.latRadians = this.deg2rad(lat)
    this.lonRadians = this.deg2rad(lon)
  }

  getCartesianX(): number {
    return Math.cos(this.latRadians) * Math.cos(this.lonRadians)
  }

  getCartesianY(): number {
    return Math.cos(this.latRadians) * Math.sin(this.lonRadians)
  }

  getCartesianZ(): number {
    return Math.sin(this.latRadians)
  }

  deg2rad(deg: number) {
    return deg * .017453292519943295
  }
}

const rad2deg = (rad: number) => {
  return rad * (180/Math.PI);
}

const calculateCenter = (geoPoints: Array<GeoPoint>): GeoPoint => {
  let x: Array<number> = [];
  let y: Array<number> = [];
  let z: Array<number> = [];

  geoPoints.forEach((geoPoint) => {
    x.push(geoPoint.getCartesianX())
    y.push(geoPoint.getCartesianY())
    z.push(geoPoint.getCartesianZ())
  })

  let xAvg = x.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0) / x.length

  let yAvg = y.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0) / y.length

  let zAvg = z.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  },0) / z.length

  let lon = Math.atan2(yAvg, xAvg);
  let hyp = Math.sqrt(xAvg * xAvg + yAvg * yAvg);
  let lat = Math.atan2(zAvg, hyp);

  return new GeoPoint(rad2deg(lat), rad2deg(lon))
}

export const handler: Handler = async (event, context) => {
  const body = 'data=' + encodeURIComponent(`
    [bbox:53.810420,10.435688,53.958749,10.954792][out:json];
    (
      way(53.810420,10.435688,53.958749,10.954792)["addr:postcode"="23554"]["addr:housenumber"];
    );
    out body;>;out skel qt;
  `)

  console.log(body);
  const response = await fetch('https://overpass-api.de/api/interpreter', {method: 'POST', body});
  const result = await response.json() as any;

  let houses: any = []
  let nodesById: any = {}

  result.forEach((element: any) => {
    if (element?.type === 'way') {
      houses.push(element);
      return
    }

    nodesById[element.id] = [element.lat, element.lon];
  })

  houses = houses.map((house: any) => {
    let center = calculateCenter(
      house.nodes.map((nodeId: any) => new GeoPoint(nodesById[nodeId][0],nodesById[nodeId][1]))
    )

    return {
      street: house.tags['addr:street'],
      housenumber: house.tags['addr:housenumber'],
      postcode: house.tags['addr:postcode'],
      latitude: center.lat,
      longitude: center.lon
    }
  })

  return 'Hello, World!';
};