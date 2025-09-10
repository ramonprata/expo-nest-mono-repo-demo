import type { IHttpClient, IHttpResponse } from '@full/common';

import { E_COM_API_ENTRY_POINTS } from '@shared/api';

import type {
  ILocationRepository,
  ICheckInsideResortResponse,
} from '../types/ILocationRepository';

export class LocationRepository implements ILocationRepository {
  constructor(private apiClient: IHttpClient) {}

  checkUserInsideResort(
    latitude: number,
    longitude: number,
  ): Promise<IHttpResponse<ICheckInsideResortResponse>> {
    return this.apiClient.post<ICheckInsideResortResponse>(
      E_COM_API_ENTRY_POINTS.POST_CHECK_USER_INSIDE_RESORT,
      { lat: latitude, lng: longitude },
    );
  }
}
