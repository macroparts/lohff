/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAddress = /* GraphQL */ `subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onCreateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAddressSubscriptionVariables,
  APITypes.OnCreateAddressSubscription
>;
export const onDeleteAddress = /* GraphQL */ `subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
  onDeleteAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAddressSubscriptionVariables,
  APITypes.OnDeleteAddressSubscription
>;
export const onUpdateAddress = /* GraphQL */ `subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
  onUpdateAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAddressSubscriptionVariables,
  APITypes.OnUpdateAddressSubscription
>;
