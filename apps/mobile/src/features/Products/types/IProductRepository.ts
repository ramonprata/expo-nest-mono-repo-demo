import type { IProductDto } from "./IProduct";
import type { IProductModel, IHttpResponse } from "@full/common";

export interface IProductRepository {
  fetchProducts(): Promise<IHttpResponse<IProductModel[]>>;
  fetchHighlightedProducts(): Promise<IHttpResponse<IProductDto[]>>;
}
