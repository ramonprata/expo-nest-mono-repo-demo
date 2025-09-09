import { type IHttpResponse } from '@full/common';
import { IProductResponse } from './types/product/products.response';

export const DemoApiInjectionToken = Symbol('DemoApiInjectionToken');

export interface IApiDemo {
  fetchProducts(): Promise<IHttpResponse<IProductResponse[]>>;
}
