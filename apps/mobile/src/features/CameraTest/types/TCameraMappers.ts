import type { ICameraImageUploadDto } from '@full/common';
import type { ICameraImageUploadView } from './ICameraView';

export interface ICameraUploadMapper {
  transform(data: ICameraImageUploadDto): ICameraImageUploadView;
}

export type TCameraMappers = {
  uploadImage: ICameraUploadMapper;
};
