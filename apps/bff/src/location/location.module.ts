import { Module } from '@nestjs/common';

import { ApiDemoModule } from '@bff-shared/apis/api-demo';

import { LocationController } from './location.controller';
import { LocationService } from './location.service';
import { TurfGeolocationAdapter } from '../shared/libs/geolocation/geolocation.adapter';
import { GeolocationPortToken } from '../shared/libs/geolocation/geolocation.port';

@Module({
  controllers: [LocationController],
  imports: [ApiDemoModule],
  providers: [
    LocationService,
    {
      provide: GeolocationPortToken,
      useClass: TurfGeolocationAdapter,
    },
  ],
  exports: [LocationService],
})
export class LocationModule {}
