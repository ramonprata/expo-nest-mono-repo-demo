import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';

import { IconSymbol } from '@/src/shared/components';

import {
  CameraContainer,
  CameraPreview,
  CaptureButton,
  CloseButton,
  ControlsContainer,
  FlipButton,
  PermissionButton,
  PermissionButtonText,
  PermissionContainer,
  PermissionText,
} from './CameraPreview.styled';

interface CameraProps {
  onClose?: () => void;
  onCapture?: (uri: string) => void;
}

export default function Camera({ onClose, onCapture }: CameraProps) {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [cameraRef, setCameraRef] = useState<CameraView | null>(null);

  if (!permission) {
    return (
      <CameraContainer>
        <PermissionText>Loading camera permissions...</PermissionText>
      </CameraContainer>
    );
  }

  if (!permission.granted) {
    return (
      <CameraContainer>
        <PermissionContainer>
          <IconSymbol size={64} name="camera.fill" color="#666" />
          <PermissionText>
            We need your permission to show the camera
          </PermissionText>
          <PermissionButton onPress={requestPermission}>
            <PermissionButtonText>Grant Permission</PermissionButtonText>
          </PermissionButton>
        </PermissionContainer>
      </CameraContainer>
    );
  }

  const toggleCameraFacing = () => {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  };

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const photo = await cameraRef.takePictureAsync({
          quality: 0.8,
          base64: false,
          skipProcessing: false,
        });

        if (photo?.uri) {
          onCapture?.(photo.uri);
          Alert.alert('Success', 'Photo captured successfully!');
        }
      } catch (error) {
        console.error('Error taking picture:', error);
        Alert.alert('Error', 'Failed to capture photo');
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CameraContainer>
        <CameraPreview ref={setCameraRef} facing={facing} />

        <ControlsContainer>
          <FlipButton onPress={toggleCameraFacing}>
            <IconSymbol size={24} name="camera.rotate" color="#fff" />
          </FlipButton>

          <CaptureButton onPress={takePicture}>
            <IconSymbol size={32} name="camera.fill" color="#fff" />
          </CaptureButton>

          {onClose && (
            <CloseButton onPress={onClose}>
              <IconSymbol size={24} name="xmark" color="#fff" />
            </CloseButton>
          )}
        </ControlsContainer>
      </CameraContainer>
    </SafeAreaView>
  );
}
