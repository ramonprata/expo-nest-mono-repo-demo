export interface ICameraImageUploadDto {
  success: boolean;
  message?: string;
  imageId?: string;
  uploadedAt?: string;
}

export interface ICameraImageUploadRequestDto {
  imageData: string; 
  fileName: string;
  mimeType: string;
  size?: number;
}
