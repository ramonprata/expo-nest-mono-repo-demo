import type { ICameraImageUploadDto } from '@full/common';

import type { ICameraImageUploadView } from '../types/ICameraView';
import type { TCameraMappers } from '../types/TCameraMappers';

const transformUploadImage = (data: ICameraImageUploadDto): ICameraImageUploadView => {
  return {
    success: data.success,
    message: data.message,
    imageId: data.imageId,
    uploadedAt: data.uploadedAt ? new Date(data.uploadedAt) : new Date(),
  };
};

const mappers: TCameraMappers = {
  uploadImage: {
    transform: transformUploadImage,
  },
};

export default mappers;
