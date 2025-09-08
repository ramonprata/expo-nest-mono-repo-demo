import type { IHttpClient, IProductDto } from "@full/common";

import { E_COM_API_ENTRY_POINTS } from "@shared/api";

import type { IProductRepository } from "../types/IProductRepository";

export class ProductsRepository implements IProductRepository {
  constructor(private eComApi: IHttpClient) {}

  fetchProducts() {
    return this.eComApi.get<IProductDto[]>(E_COM_API_ENTRY_POINTS.GET_PRODUCTS);
  }

  fetchHighlightedProducts() {
    return this.eComApi.get<IProductDto[]>(E_COM_API_ENTRY_POINTS.GET_PRODUCTS);
  }
}
