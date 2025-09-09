import { IHttpResponse } from '@full/common';
import { IProductResponse } from '@bff-shared/apis/api-demo';

const DEFAULT_RESPONSE_VALUES = {
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {},
};

export const PRODUCTS_RESPONSE_MOCK: IHttpResponse<IProductResponse[]> = {
  ...DEFAULT_RESPONSE_VALUES,
  data: [
    {
      id: 1,
      name: 'Product 1',
      description: '',
      price_usd: 10,
      image: { file_path: '', alt: '' },
    },
    {
      id: 2,
      name: 'Product 2',
      description: '',
      price_usd: 20,
      image: { file_path: '', alt: '' },
    },
  ],
};
