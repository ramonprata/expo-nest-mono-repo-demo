import { Test, TestingModule } from '@nestjs/testing';

import { IHttpResponse } from '@full/common';

import {
  DemoApiInjectionToken,
  IApiDemo,
  IProductResponse,
} from '@bff-shared/apis/api-demo';

import { ProductsService } from '../products.service';
import {
  ProductMapperInjectionToken,
  IProductMapper,
} from '../types/product-mapper';
import { PRODUCTS_RESPONSE_MOCK } from './mocks/produtcts';

describe('ProductsService', () => {
  let service: ProductsService;
  let apiAdapter: jest.Mocked<IApiDemo>;
  let productMapper: jest.Mocked<Partial<IProductMapper>>;

  beforeEach(async () => {
    apiAdapter = { fetchProducts: jest.mocked(apiAdapter.fetchProducts) };
    productMapper = { toDto: jest.mocked(productMapper.toDto) };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        { provide: DemoApiInjectionToken, useValue: apiAdapter },
        { provide: ProductMapperInjectionToken, useValue: productMapper },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should call apiAdapter.fetchProducts and map the result', async () => {
    const apiResponse: IHttpResponse<IProductResponse[]> =
      PRODUCTS_RESPONSE_MOCK;

    apiAdapter.fetchProducts.mockResolvedValueOnce(apiResponse);
    await service.getProducts();

    expect(apiAdapter.fetchProducts).toHaveBeenCalled();
    expect(productMapper.toDto).toHaveBeenCalledTimes(2);
    expect(productMapper.toDto).toHaveBeenCalledWith(apiResponse.data[0]);
    expect(productMapper.toDto).toHaveBeenCalledWith(apiResponse.data[1]);
  });
});
