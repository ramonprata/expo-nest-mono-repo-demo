import { useMutation } from '@tanstack/react-query';

import cameraManager from '../services';

export const useUploadImage = () => {
  const mutation = useMutation({
    mutationFn: (imageData: FormData) => cameraManager.uploadImage(imageData),
    onSuccess: (data) => {
      console.log('Image uploaded successfully:', data);
    },
    onError: (error) => {
      console.error('Error uploading image:', error);
    },
  });

  return {
    uploadImage: mutation.mutate,
    uploadImageAsync: mutation.mutateAsync,
    isUploading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
    reset: mutation.reset,
  };
};
