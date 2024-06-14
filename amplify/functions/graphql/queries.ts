/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAddress = /* GraphQL */ `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    createdAt
    housenumber
    id
    latitude
    longitude
    postcode
    street
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAddressQueryVariables,
  APITypes.GetAddressQuery
>;
export const listAddressByPostcode = /* GraphQL */ `query ListAddressByPostcode(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
  $postcode: String!
  $sortDirection: ModelSortDirection
) {
  listAddressByPostcode(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    postcode: $postcode
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      housenumber
      id
      latitude
      longitude
      postcode
      street
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressByPostcodeQueryVariables,
  APITypes.ListAddressByPostcodeQuery
>;
export const listAddresses = /* GraphQL */ `query ListAddresses(
  $filter: ModelAddressFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listAddresses(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      housenumber
      id
      latitude
      longitude
      postcode
      street
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAddressesQueryVariables,
  APITypes.ListAddressesQuery
>;
