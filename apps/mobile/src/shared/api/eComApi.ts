import { AxiosHttpClient } from '@full/common';
import Constants from 'expo-constants';

const E_COMMERCE_API_CONFIG = {
  baseURL: Constants.expoConfig?.extra?.apiUrl as string,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer token',
  },
};

export const E_COM_API_ENTRY_POINTS = {
  GET_PRODUCTS: '/products',
  POST_CHECK_USER_INSIDE_RESORT: '/location/checkUserInsideResort',
};

export const eComApi = new AxiosHttpClient(E_COMMERCE_API_CONFIG);

export type TEcomApi = typeof eComApi;
