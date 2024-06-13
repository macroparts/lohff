import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { fillAddressTable } from './functions/fill-address-table/resource'

defineBackend({
  auth,
  data,
  fillAddressTable
});
