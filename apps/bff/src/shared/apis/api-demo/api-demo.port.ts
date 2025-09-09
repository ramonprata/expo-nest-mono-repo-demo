import { type IHttpResponse } from '@full/common';
import { IProductResponse } from './types/product/products.response';
import { InjectionToken } from '@nestjs/common';

export interface IApiDemo {
  fetchProducts(): Promise<IHttpResponse<IProductResponse[]>>;
}

export const DemoApiInjectionToken: InjectionToken<IApiDemo> = Symbol(
  'DemoApiInjectionToken',
);
