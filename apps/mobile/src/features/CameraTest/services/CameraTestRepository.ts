import type { IHttpClient, ICameraImageUploadDto, IHttpResponse } from '@full/common';

import { E_COM_API_ENTRY_POINTS } from '@shared/api';

import type { ICameraRepository } from '../types/ICameraRepository';

export class CameraRepository implements ICameraRepository {
  constructor(private eComApi: IHttpClient) {}

  uploadImage(imageData: FormData): Promise<IHttpResponse<ICameraImageUploadDto>> {
    return this.eComApi.post<ICameraImageUploadDto>(
      E_COM_API_ENTRY_POINTS.UPLOAD_IMAGE,
      imageData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  }
}
