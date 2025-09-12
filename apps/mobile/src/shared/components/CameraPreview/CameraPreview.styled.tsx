import styled from '@emotion/native';
import { CameraView } from 'expo-camera';

export const CameraContainer = styled.View`
  flex: 1;
  background-color: #000;
`;

export const CameraPreview = styled(CameraView)`
  flex: 1;
`;

export const PermissionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const PermissionText = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
  margin: 20px 0;
  line-height: 24px;
`;

export const PermissionButton = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 16px 32px;
  border-radius: 8px;
  margin-top: 16px;
`;

export const PermissionButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ControlsContainer = styled.View`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 40px;
`;

export const CaptureButton = styled.TouchableOpacity`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background-color: rgba(255, 255, 255, 0.3);
  border: 3px solid #fff;
  justify-content: center;
  align-items: center;
`;

export const FlipButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;
