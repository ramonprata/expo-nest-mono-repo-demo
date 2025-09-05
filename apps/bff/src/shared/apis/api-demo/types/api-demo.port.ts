import { type IHttpResponse } from '@full/common';
import { IProductResponse } from './products.response';

export interface IApiDemoPort {
  fetchProducts(): Promise<IHttpResponse<IProductResponse[]>>;
}
