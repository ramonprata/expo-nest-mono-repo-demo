import { Controller, Post, Body } from '@nestjs/common';

import { LocationService } from './location.service';
import type { LocationCheckResponseDto } from './types/location.response';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post('checkUserInsideResort')
  checkUserInsideResort(
    @Body() body: { lat: number; lng: number },
  ): LocationCheckResponseDto {
    const inside = this.locationService.checkUserInsideResort(
      body.lat,
      body.lng,
    );
    return { inside };
  }
}
