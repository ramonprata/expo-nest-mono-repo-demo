import { Inject, Injectable } from '@nestjs/common';

import { type ICameraImageUploadDto } from '@full/common';

import {
  type ICameraMapper,
  CameraMapperInjectionToken,
} from './types/camera-mapper';

@Injectable()
export class CameraService {
  constructor(
    @Inject(CameraMapperInjectionToken)
    private readonly cameraMapper: ICameraMapper,
  ) {}

  async uploadImage(imageData: Express.Multer.File): Promise<ICameraImageUploadDto> {
    try {

      const imageId = `img_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      console.log('Image uploaded:', {
        filename: imageData.filename,
        originalname: imageData.originalname,
        size: imageData.size,
        mimetype: imageData.mimetype,
        imageId,
      });

      return this.cameraMapper.toDto(
        true,
        'Image uploaded successfully',
        imageId
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      return this.cameraMapper.toDto(
        false,
        'Failed to upload image'
      );
    }
  }
}
