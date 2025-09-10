import { Injectable } from '@nestjs/common';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { point, polygon } from '@turf/helpers';
import { Feature, GeoJsonProperties, Polygon } from 'geojson';

import { IGeolocationPort } from './geolocation.port';

@Injectable()
export class TurfGeolocationAdapter implements IGeolocationPort {
  createPolygon(
    coordinates: number[][][],
  ): Feature<Polygon, GeoJsonProperties> {
    return polygon(coordinates);
  }

  isPointInsidePolygon(
    latitude: number,
    longitude: number,
    polygonObj: Feature<Polygon, GeoJsonProperties>,
  ): boolean {
    const userPoint = point([longitude, latitude]);
    return booleanPointInPolygon(userPoint, polygonObj as any);
  }
}
