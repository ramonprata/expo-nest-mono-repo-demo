import { InjectionToken } from '@nestjs/common';

import type { ICameraImageUploadDto } from '@full/common';

export interface ICameraMapper {
  toDto(success: boolean, message?: string, imageId?: string): ICameraImageUploadDto;
}

export const CameraMapperInjectionToken: InjectionToken<ICameraMapper> = Symbol(
  'CameraMapperInjectionToken',
);
