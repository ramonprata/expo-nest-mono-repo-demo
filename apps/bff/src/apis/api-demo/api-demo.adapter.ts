import { Inject, Injectable } from '@nestjs/common';
import { IApiDemoPort } from './api-demo.port';
import type { IHttpClient, IHttpResponse, IProductModel } from '@full/common';
import { IProductResponse } from './types/products.response';
import { IHttpClientToken } from './tokens';

@Injectable()
export class ApiDemoAdapter implements IApiDemoPort {
  constructor(
    @Inject(IHttpClientToken) private readonly httpClient: IHttpClient,
  ) {}

  // async fetchProducts(): Promise<IHttpResponse<IProductResponse[]>> {
  //   return this.httpClient.get<IProductResponse[]>('/products');
  // }

  async fetchProducts(): Promise<IHttpResponse<IProductResponse[]>> {
    return new Promise((resolve) => {
      resolve({
        status: 200,
        data: PRODUCTS_MOCK,
        headers: {},
        statusText: 'OK',
        config: {},
      } as IHttpResponse<IProductResponse[]>);
    });
  }
}

const PRODUCTS_MOCK: IProductResponse[] = [
  {
    id: 1,
    name: 'Notebook Pro X15',
    description:
      'High-performance laptop with 12th Gen Intel i7 processor, 16GB RAM, and 512GB SSD.',
    price_usd: 7499.9,
    image: {
      file_path: 'https://picsum.photos/id/180/600/400',
      alt: 'Notebook Pro X15',
    },
  },
  {
    id: 2,
    name: 'Smartphone Neo Z',
    description:
      '5G smartphone with 6.7” AMOLED display, triple 64MP camera, and 5000mAh battery.',
    price_usd: 3999.0,
    image: {
      file_path:
        'https://images.samsung.com/is/image/samsung/p6pim/br/f-a566ezkr390b/gallery/br-bundle-a56-5g__-galaxy-fit3__-graphite-f-a566ezkr390b-thumb-545945947?$UX_EXT2_PNG$',
      alt: 'Smartphone Neo Z',
    },
  },
  {
    id: 3,
    name: 'Headphones Pulse',
    description:
      'Bluetooth headset with active noise cancellation and up to 30 hours of battery life.',
    price_usd: 899.9,
    image: {
      file_path:
        'https://cdn.dooca.store/152726/products/1078_640x640.png?v=1723048692&webp=0',
      alt: 'Wireless Headphones Pulse',
    },
  },
  {
    id: 4,
    name: 'UltraWide 34” Vision Monitor',
    description:
      'Curved UltraWide monitor with QHD resolution, 144Hz refresh rate, and HDR10 support.',
    price_usd: 2599.0,
    image: {
      file_path:
        'https://img.odcdn.com.br/wp-content/uploads/2023/01/odyssey-g9-57-2.webp',
      alt: 'UltraWide 34” Vision Monitor',
    },
  },
  {
    id: 5,
    name: 'RGB Mechanical Keyboard',
    description:
      'Gaming mechanical keyboard with Blue switches, RGB lighting, and programmable keys.',
    price_usd: 499.9,
    image: {
      file_path:
        'https://m.media-amazon.com/images/S/aplus-media-library-service-media/d519ae5a-5abe-4b40-847b-b3dbbb5b7266.__CR0,0,970,600_PT0_SX970_V1___.png',
      alt: 'RGB Storm Mechanical Keyboard',
    },
  },
];
