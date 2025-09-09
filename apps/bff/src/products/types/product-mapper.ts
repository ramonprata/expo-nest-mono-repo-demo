import { IProductDto } from '@full/common';
import { IProductRequest, IProductResponse } from '../../shared/apis/api-demo';

export const ProductMapperInjectionToken = Symbol(
  'ProductMapperInjectionToken',
);

export interface IProductMapper {
  toDto(apiProduct: IProductResponse): IProductDto;
  toRequest(dto: IProductDto): IProductRequest;
}
