import type { ICameraImageUploadDto, IHttpResponse } from '@full/common';

export interface ICameraRepository {
  uploadImage(imageData: FormData): Promise<IHttpResponse<ICameraImageUploadDto>>;
}
