/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Address = {
  __typename: "Address",
  createdAt: string,
  housenumber: string,
  id: string,
  latitude: number,
  longitude: number,
  postcode: string,
  street: string,
  updatedAt: string,
};

export type ModelAddressFilterInput = {
  and?: Array< ModelAddressFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  housenumber?: ModelStringInput | null,
  id?: ModelIDInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  not?: ModelAddressFilterInput | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  postcode?: ModelStringInput | null,
  street?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
};

export type ModelAddressConditionInput = {
  and?: Array< ModelAddressConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  housenumber?: ModelStringInput | null,
  latitude?: ModelFloatInput | null,
  longitude?: ModelFloatInput | null,
  not?: ModelAddressConditionInput | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  postcode?: ModelStringInput | null,
  street?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateAddressInput = {
  housenumber: string,
  id?: string | null,
  latitude: number,
  longitude: number,
  postcode: string,
  street: string,
};

export type DeleteAddressInput = {
  id: string,
};

export type UpdateAddressInput = {
  housenumber?: string | null,
  id: string,
  latitude?: number | null,
  longitude?: number | null,
  postcode?: string | null,
  street?: string | null,
};

export type ModelSubscriptionAddressFilterInput = {
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  housenumber?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  latitude?: ModelSubscriptionFloatInput | null,
  longitude?: ModelSubscriptionFloatInput | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  postcode?: ModelSubscriptionStringInput | null,
  street?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};

export type ListAddressByPostcodeQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  postcode: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListAddressByPostcodeQuery = {
  listAddressByPostcode?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      createdAt: string,
      housenumber: string,
      id: string,
      latitude: number,
      longitude: number,
      postcode: string,
      street: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      createdAt: string,
      housenumber: string,
      id: string,
      latitude: number,
      longitude: number,
      postcode: string,
      street: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: CreateAddressInput,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};

export type DeleteAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: DeleteAddressInput,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};

export type UpdateAddressMutationVariables = {
  condition?: ModelAddressConditionInput | null,
  input: UpdateAddressInput,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    createdAt: string,
    housenumber: string,
    id: string,
    latitude: number,
    longitude: number,
    postcode: string,
    street: string,
    updatedAt: string,
  } | null,
};
