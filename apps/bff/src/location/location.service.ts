import { Inject, Injectable } from '@nestjs/common';
import { Feature, GeoJsonProperties, Polygon } from 'geojson';

import {
  GeolocationPortToken,
  type IGeolocationPort,
} from '../shared/libs/geolocation/geolocation.port';

@Injectable()
export class LocationService {
  private resortPolygon: Feature<Polygon, GeoJsonProperties>;

  constructor(
    @Inject(GeolocationPortToken)
    private readonly geolocation: IGeolocationPort,
  ) {
    this.resortPolygon = this.geolocation.createPolygon([
      [
        [-74.006, 40.7128],
        [-74.005, 40.7138],
        [-74.004, 40.712],
        [-74.006, 40.7128],
      ],
    ]);
  }

  checkUserInsideResort(latitude: number, longitude: number): boolean {
    return this.geolocation.isPointInsidePolygon(
      latitude,
      longitude,
      this.resortPolygon,
    );
  }
}
