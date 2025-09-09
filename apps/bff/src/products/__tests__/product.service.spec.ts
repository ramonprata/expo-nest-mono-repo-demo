import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from '../products.service';
import {
  DemoApiInjectionToken,
  IApiDemo,
  IProductResponse,
} from '../../shared/apis/api-demo';
import {
  ProductMapperInjectionToken,
  IProductMapper,
} from '../types/product-mapper';
import { IHttpResponse, IProductDto } from '@full/common';
import { PRODUCTS_RESPONSE_MOCK } from './mocks/produtcts';

describe('ProductsService', () => {
  let service: ProductsService;
  let apiAdapter: jest.Mocked<IApiDemo>;
  let productMapper: jest.Mocked<IProductMapper>;

  beforeEach(async () => {
    apiAdapter = { fetchProducts: jest.fn() } as any;
    productMapper = { toDto: jest.fn() } as any;

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
