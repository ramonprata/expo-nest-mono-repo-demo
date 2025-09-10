import type { ILocationRepository } from '../types/ILocationRepository';

export class LocationManager {
  constructor(private repository: ILocationRepository) {}

  async isUserInsideResort(
    latitude: number,
    longitude: number,
  ): Promise<boolean> {
    try {
      const response = await this.repository.checkUserInsideResort(
        latitude,
        longitude,
      );
      return response.data.inside;
    } catch (error) {
      console.error('Error checking geofencing:', error);
      throw error;
    }
  }
}
