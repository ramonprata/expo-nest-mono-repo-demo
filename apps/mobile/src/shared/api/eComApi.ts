import { AxiosHttpClient } from "@full/common";

const E_COMMERCE_API_CONFIG = {
  baseURL: "http://localhost:5000/api/local",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer token",
  },
};

export const E_COM_API_ENTRY_POINTS = {
  GET_PRODUCTS: "/products",
};

export const eComApi = AxiosHttpClient.getInstance(E_COMMERCE_API_CONFIG);

export type TEcomApi = typeof eComApi;
