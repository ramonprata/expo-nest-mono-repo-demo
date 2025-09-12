import { useState } from 'react';

import { useUploadImage } from './useCameraData';

interface UseImageUploadReturn {
  isUploading: boolean;
  uploadImage: (imageUri: string, fileName?: string) => Promise<boolean>;
  error: string | null;
  uploadProgress: number;
}

const UPLOAD_ERROR = 'Error uploading image';

export const useImageUpload = (): UseImageUploadReturn => {
  const [error, setError] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const {
    uploadImageAsync,
    isUploading,
    error: uploadError,
    isSuccess,
  } = useUploadImage();

  const uploadImage = async (
    imageUri: string,
    fileName = 'image.jpg',
  ): Promise<boolean> => {
    try {
      setError(null);
      setUploadProgress(0);

      // Create FormData
      const formData = new FormData();

      // Add image to FormData
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: fileName,
      } as any);

      // Upload using the new architecture
      const result = await uploadImageAsync(formData);
      setUploadProgress(100);

      return result.success;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : UPLOAD_ERROR;
      setError(errorMessage);
      console.error('Upload error:', err);
      return false;
    }
  };

  return {
    isUploading,
    uploadImage,
    error: error || uploadError?.message || null,
    uploadProgress,
  };
};
