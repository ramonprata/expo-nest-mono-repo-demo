import { type IHttpResponse } from '@full/common';
import { IProductResponse } from './types/products.response';

export const DemoApiInjectionToken = Symbol('DemoApiInjectionToken');

export interface IApiDemoPort {
  fetchProducts(): Promise<IHttpResponse<IProductResponse[]>>;
}
