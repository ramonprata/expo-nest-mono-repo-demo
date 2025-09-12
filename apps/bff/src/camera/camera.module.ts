import { Module } from '@nestjs/common';

import { CameraMapper } from './camera.mappers';
import { CameraController } from './camera.controller';
import { CameraService } from './camera.service';
import { CameraMapperInjectionToken } from './types/camera-mapper';

@Module({
  controllers: [CameraController],
  providers: [
    CameraService,
    {
      provide: CameraMapperInjectionToken,
      useClass: CameraMapper,
    },
  ],
  exports: [CameraService],
})
export class CameraModule {}
