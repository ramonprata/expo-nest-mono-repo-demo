import { type IProductDto } from '@full/common';

import type {
  IProductRequest,
  IProductResponse,
} from '@bff-shared/apis/api-demo';

import { IProductMapper } from './types/product-mapper';

export class ProductMapper implements IProductMapper {
  public toDto(apiProduct: IProductResponse): IProductDto {
    return {
      id: apiProduct.id.toString(),
      description: apiProduct.description,
      name: apiProduct.name,
      price: apiProduct.price_usd,
      image: {
        filePath: apiProduct.image.file_path,
        alt: apiProduct.image.alt,
      },
    };
  }

  public toRequest(dto: IProductDto): IProductRequest {
    return {
      name: dto.name,
      description: dto.description,
      price_usd: dto.price,
      image: {
        file_path: dto.image?.filePath ?? '',
        alt: dto.image?.alt ?? '',
      },
    };
  }
}
