import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';

import { IconSymbol } from '@/src/shared/components';
import Camera from '@/src/shared/components/CameraPreview/CameraPreview';
import { usePictureFromGallery } from '@/src/shared/hooks/usePictureFromGallery';

import {
  Button,
  ButtonsContainer,
  ButtonText,
  Container,
  Description,
  IconContainer,
  Title,
} from './styles/CameraTest.styled';
import { useImageUpload } from '../hooks/useImageUpload';

export default function CameraTestScreen() {
  const [showCamera, setShowCamera] = useState(false);
  const [selectedImageUri, setSelectedImageUri] = useState<string | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const { selectedImages, isLoading, openGallery, clearSelection, error } =
    usePictureFromGallery({
      quality: 0.8,
      selectionLimit: 1,
    });

  const {
    isUploading,
    uploadImage,
    error: uploadError,
    uploadProgress,
  } = useImageUpload();

  const handleOpenCamera = () => {
    setShowCamera(true);
  };

  const handleCloseCamera = () => {
    setShowCamera(false);
  };

  const handleCapture = async (uri: string) => {
    console.log('Photo captured:', uri);
    setSelectedImageUri(uri);

    if (selectedImages.length > 0) {
      clearSelection();
    }

    setShowCamera(false);

    await handleUploadImage(uri);
  };

  const handleOpenGallery = async () => {
    try {
      await openGallery();
    } catch (err) {
      console.error('Error opening gallery:', err);
    }
  };

  const handleUploadImage = async (imageUri: string) => {
    try {
      const fileName = `image_${Date.now()}.jpg`;
      const success = await uploadImage(imageUri, fileName);

      if (success) {
        setUploadedImageUrl('uploaded');
        Alert.alert('Success', 'Image uploaded successfully!');
        console.log('Image uploaded successfully');
      } else {
        Alert.alert('Error', 'Failed to upload image');
      }
    } catch (err) {
      console.error('Upload error:', err);
      Alert.alert('Error', 'Failed to upload image');
    }
  };

  const handleUploadSelectedImage = () => {
    if (selectedImageUri) {
      handleUploadImage(selectedImageUri);
    }
  };

  useEffect(() => {
    if (selectedImages.length > 0) {
      const imageUri = selectedImages[0].uri;
      console.log('Image selected from gallery:', imageUri);
      setSelectedImageUri(imageUri);
    }
  }, [selectedImages]);

  useEffect(() => {
    if (error) {
      Alert.alert('Gallery Error', error);
    }
  }, [error]);

  useEffect(() => {
    if (uploadError) {
      Alert.alert('Upload Error', uploadError);
    }
  }, [uploadError]);

  const handleClearImage = () => {
    setSelectedImageUri(null);
    setUploadedImageUrl(null);
    clearSelection();
  };

  if (showCamera) {
    return <Camera onClose={handleCloseCamera} onCapture={handleCapture} />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <IconContainer>
          <IconSymbol size={64} name="camera.fill" color={'#007AFF'} />
        </IconContainer>
        <Title>Camera Test</Title>
        <Description>
          Feature to provide pictures from customers bills test.
        </Description>

        <ButtonsContainer>
          <Button onPress={handleOpenCamera} disabled={isUploading}>
            <ButtonText>Open Camera</ButtonText>
          </Button>

          <Button
            onPress={handleOpenGallery}
            disabled={isLoading || isUploading}
          >
            <ButtonText>{isLoading ? 'Loading...' : 'Open Gallery'}</ButtonText>
          </Button>

          {selectedImageUri && !uploadedImageUrl && (
            <Button onPress={handleUploadSelectedImage} disabled={isUploading}>
              <ButtonText>
                {isUploading
                  ? `Uploading... ${uploadProgress}%`
                  : 'Upload Image'}
              </ButtonText>
            </Button>
          )}

          {(selectedImageUri || uploadedImageUrl) && (
            <Button onPress={handleClearImage} disabled={isUploading}>
              <ButtonText>Clear Image</ButtonText>
            </Button>
          )}
        </ButtonsContainer>

        {uploadedImageUrl && (
          <Description>✅ Image uploaded successfully!</Description>
        )}
      </Container>
    </SafeAreaView>
  );
}
