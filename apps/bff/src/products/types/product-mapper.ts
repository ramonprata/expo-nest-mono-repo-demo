import { InjectionToken } from '@nestjs/common';

import { IProductDto } from '@full/common';

import { IProductRequest, IProductResponse } from '@bff-shared/apis/api-demo';

export interface IProductMapper {
  toDto(apiProduct: IProductResponse): IProductDto;
  toRequest(dto: IProductDto): IProductRequest;
}

export const ProductMapperInjectionToken: InjectionToken<IProductMapper> =
  Symbol('ProductMapperInjectionToken');
