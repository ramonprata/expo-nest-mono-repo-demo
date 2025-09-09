import { Inject, Injectable } from '@nestjs/common';
import { type IProductDto } from '@full/common';
import { DemoApiInjectionToken, type IApiDemo } from '../shared/apis/api-demo';
import {
  type IProductMapper,
  ProductMapperInjectionToken,
} from './types/product-mapper';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(DemoApiInjectionToken) private readonly apiAdapter: IApiDemo,
    @Inject(ProductMapperInjectionToken)
    private readonly productMapper: IProductMapper,
  ) {}

  async getProducts(): Promise<IProductDto[]> {
    const response = await this.apiAdapter.fetchProducts();
    return response.data.map((item) => this.productMapper.toDto(item));
  }
}
