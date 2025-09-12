import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';

interface UsePictureFromGalleryOptions {
  mediaTypes?: ImagePicker.MediaTypeOptions;
  quality?: number;
  allowsMultipleSelection?: boolean;
  selectionLimit?: number;
}

interface UsePictureFromGalleryReturn {
  selectedImages: ImagePicker.ImagePickerAsset[];
  isLoading: boolean;
  openGallery: () => Promise<void>;
  clearSelection: () => void;
  error: string | null;
}

const PERMISSION_NEEDED = 'Permission needed';
const GALLERY_ACCESS_MESSAGE =
  'We need access to your gallery to select images.';
const OK_BUTTON = 'OK';
const UNKNOWN_PERMISSION_ERROR = 'Unknown error while requesting permissions';
const GALLERY_ACCESS_ERROR = 'An error occurred while accessing the gallery';
const ERROR_TITLE = 'Error';
const GALLERY_ERROR_LOG = 'Gallery error:';

export const usePictureFromGallery = (
  options: UsePictureFromGalleryOptions = {},
): UsePictureFromGalleryReturn => {
  const [selectedImages, setSelectedImages] = useState<
    ImagePicker.ImagePickerAsset[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const defaultOptions: ImagePicker.ImagePickerOptions = {
    mediaTypes: options.mediaTypes || ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
    quality: options.quality || 0.8,
    allowsMultipleSelection: options.allowsMultipleSelection || false,
    selectionLimit: options.selectionLimit || 1,
  };

  const requestGalleryPermissions = async (): Promise<boolean> => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(PERMISSION_NEEDED, GALLERY_ACCESS_MESSAGE, [
          { text: OK_BUTTON },
        ]);
        return false;
      }

      return true;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : UNKNOWN_PERMISSION_ERROR;
      setError(errorMessage);
      return false;
    }
  };

  const openGallery = async (): Promise<void> => {
    try {
      setError(null);
      setIsLoading(true);

      const hasPermission = await requestGalleryPermissions();
      if (!hasPermission) {
        setIsLoading(false);
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync(defaultOptions);

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setSelectedImages(result.assets);
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : GALLERY_ACCESS_ERROR;

      setError(errorMessage);
      Alert.alert(ERROR_TITLE, errorMessage);
      console.error(GALLERY_ERROR_LOG, err);
    } finally {
      setIsLoading(false);
    }
  };

  const clearSelection = (): void => {
    setSelectedImages([]);
    setError(null);
  };

  return {
    selectedImages,
    isLoading,
    openGallery,
    clearSelection,
    error,
  };
};
