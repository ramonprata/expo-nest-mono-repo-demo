import { Inject, Injectable } from '@nestjs/common';
import { type IProductModel } from '@full/common';
import { DemoApiPortToken, type IApiDemoPort } from '../shared/apis/api-demo';

@Injectable()
export class ProductsService {
  constructor(
    @Inject(DemoApiPortToken) private readonly apiAdapter: IApiDemoPort,
  ) {}

  async getProducts(): Promise<IProductModel[]> {
    const response = await this.apiAdapter.fetchProducts();
    return response.data.map((item) => ({
      id: String(item.id),
      description: item.description,
      name: item.name,
      price: item.price_usd,
      image: { filePath: item.image.file_path, alt: item.image.alt },
    }));
  }
}
