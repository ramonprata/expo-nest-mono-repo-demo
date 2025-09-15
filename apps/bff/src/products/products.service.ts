import { Inject, Injectable } from '@nestjs/common';

import { type IProductDto } from '@full/common';

import {
  DemoApiInjectionToken,
  type IApiDemo,
} from '@bff-shared/apis/api-demo';

import {
  type IProductMapper,
  ProductMapperInjectionToken,
} from './types/product-mapper';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(ProductMapperInjectionToken)
    private readonly productMapper: IProductMapper,
    @Inject(DemoApiInjectionToken as symbol)
    private readonly apiAdapter: IApiDemo,
  ) {}

  async getProducts(): Promise<IProductDto[]> {
    try {
      const response = await this.apiAdapter.fetchProducts();
      return response.data.map((item) => this.productMapper.toDto(item));
    } catch {
      throw new Error(`Failed to fetch products`);
    }
  }
}
