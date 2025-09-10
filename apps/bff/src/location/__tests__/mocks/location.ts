import type { Feature, Polygon, GeoJsonProperties } from 'geojson';

import type { IGeolocationPort } from '../../../shared/libs/geolocation/geolocation.port';

export const createGeolocationPortMock = (
  insideReturnValue: boolean = true,
): jest.Mocked<IGeolocationPort> => {
  return {
    createPolygon: jest.fn().mockReturnValue({
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [],
      },
      properties: {},
    } as Feature<Polygon, GeoJsonProperties>),
    isPointInsidePolygon: jest.fn().mockReturnValue(insideReturnValue),
  };
};
