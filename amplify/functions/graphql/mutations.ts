/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAddress = /* GraphQL */ `mutation CreateAddress(
  $condition: ModelAddressConditionInput
  $input: CreateAddressInput!
) {
  createAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateAddressMutationVariables,
  APITypes.CreateAddressMutation
>;
export const deleteAddress = /* GraphQL */ `mutation DeleteAddress(
  $condition: ModelAddressConditionInput
  $input: DeleteAddressInput!
) {
  deleteAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteAddressMutationVariables,
  APITypes.DeleteAddressMutation
>;
export const updateAddress = /* GraphQL */ `mutation UpdateAddress(
  $condition: ModelAddressConditionInput
  $input: UpdateAddressInput!
) {
  updateAddress(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateAddressMutationVariables,
  APITypes.UpdateAddressMutation
>;
