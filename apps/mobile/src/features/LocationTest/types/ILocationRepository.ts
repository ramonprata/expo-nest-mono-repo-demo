import type { IHttpResponse } from '@full/common';

export interface ICheckInsideResortResponse {
  inside: boolean;
}

export interface ILocationRepository {
  checkUserInsideResort(
    latitude: number,
    longitude: number,
  ): Promise<IHttpResponse<ICheckInsideResortResponse>>;
}
