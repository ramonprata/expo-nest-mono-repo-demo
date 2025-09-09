import { Test, TestingModule } from '@nestjs/testing';

import { IHttpClient, IHttpResponse } from '@full/common';

import { IHttpClientInjectionToken } from '../../../utils';
import { ApiDemo } from '../api-demo.adapter';

describe('ApiDemo', () => {
  let apiDemo: ApiDemo;
  let httpClient: jest.Mocked<IHttpClient>;

  beforeEach(async () => {
    httpClient = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ApiDemo,
        { provide: IHttpClientInjectionToken, useValue: httpClient },
      ],
    }).compile();

    apiDemo = module.get<ApiDemo>(ApiDemo);
  });

  it('should call httpClient.get with the correct endpoint', async () => {
    const mockResponse: IHttpResponse<unknown[]> = {
      status: 200,
      statusText: 'OK',
      data: [],
      headers: {},
    };

    httpClient.get.mockResolvedValueOnce(mockResponse);

    const result = await apiDemo.fetchProducts();

    expect(httpClient.get).toHaveBeenCalledWith('/products');
    expect(result).toEqual(mockResponse);
  });

  it('should propagate errors from httpClient.get', async () => {
    httpClient.get.mockRejectedValueOnce(new Error('Network error'));

    await expect(apiDemo.fetchProducts()).rejects.toThrow('Network error');

    expect(httpClient.get).toHaveBeenCalledWith('/products');
  });
});
