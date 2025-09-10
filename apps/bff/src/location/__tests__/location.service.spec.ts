import { LocationService } from '../location.service';
import { createGeolocationPortMock } from './mocks/location';

describe('LocationService', () => {
  it('should return true when user is inside resort', () => {
    const geoMock = createGeolocationPortMock(true);
    const service = new LocationService(geoMock);

    const result = service.checkUserInsideResort(40.7128, -74.006);

    expect(result).toBe(true);
    expect(geoMock.createPolygon).toHaveBeenCalledTimes(1);
    expect(geoMock.isPointInsidePolygon).toHaveBeenCalledWith(
      40.7128,
      -74.006,
      expect.any(Object),
    );
  });

  it('should return false when user is outside resort', () => {
    const geoMock = createGeolocationPortMock(false);
    const service = new LocationService(geoMock);

    const result = service.checkUserInsideResort(41.0, -75.0);

    expect(result).toBe(false);
    expect(geoMock.isPointInsidePolygon).toHaveBeenCalledWith(
      41.0,
      -75.0,
      expect.any(Object),
    );
  });
});
