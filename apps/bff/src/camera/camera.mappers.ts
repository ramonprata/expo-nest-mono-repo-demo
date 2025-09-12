import { type ICameraImageUploadDto } from '@full/common';

import { ICameraMapper } from './types/camera-mapper';

export class CameraMapper implements ICameraMapper {
  public toDto(success: boolean, message?: string, imageId?: string): ICameraImageUploadDto {
    return {
      success,
      message,
      imageId,
      uploadedAt: new Date().toISOString(),
    };
  }
}
