import type { ICameraImageUploadView } from '../types/ICameraView';
import type { ICameraRepository } from '../types/ICameraRepository';
import type { TCameraMappers } from '../types/TCameraMappers';

export class CameraManager {
  private repository: ICameraRepository;
  private mappers: TCameraMappers;

  constructor(_repository: ICameraRepository, _mappers: TCameraMappers) {
    this.repository = _repository;
    this.mappers = _mappers;
  }

  async uploadImage(imageData: FormData): Promise<ICameraImageUploadView> {
    try {
      const response = await this.repository.uploadImage(imageData);
      return this.mappers.uploadImage.transform(response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }
}
