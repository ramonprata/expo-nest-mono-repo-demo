import type { IProductDto, IHttpResponse } from '@full/common';

export interface IProductRepository {
  fetchProducts(): Promise<IHttpResponse<IProductDto[]>>;
  fetchHighlightedProducts(): Promise<IHttpResponse<IProductDto[]>>;
}
