import { InjectionToken } from '@nestjs/common';
import type { Feature, Polygon, GeoJsonProperties } from 'geojson';

export interface IGeolocationPort {
  createPolygon(coordinates: number[][][]): Feature<Polygon, GeoJsonProperties>;
  isPointInsidePolygon(
    latitude: number,
    longitude: number,
    polygon: Feature<Polygon, GeoJsonProperties>,
  ): boolean;
}

export const GeolocationPortToken: InjectionToken<IGeolocationPort> = Symbol(
  'GeolocationPortToken',
);
