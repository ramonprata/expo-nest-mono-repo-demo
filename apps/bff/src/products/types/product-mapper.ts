import { IProductDto } from '@full/common';
import { IProductRequest, IProductResponse } from '@bff-shared/apis/api-demo';
import { InjectionToken } from '@nestjs/common';

export interface IProductMapper {
  toDto(apiProduct: IProductResponse): IProductDto;
  toRequest(dto: IProductDto): IProductRequest;
}

export const ProductMapperInjectionToken: InjectionToken<IProductMapper> =
  Symbol('ProductMapperInjectionToken');
