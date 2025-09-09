import { ComponentProps } from 'react';

import { IconButtonContainer } from './IconButton.styled';
import { IconSymbol } from '../IconSymbol/IconSymbol';

export interface IconButtonProps extends ComponentProps<typeof IconSymbol> {
  onPress: () => void;
}

export const IconButton = ({ name, color, size, onPress }: IconButtonProps) => {
  return (
    <IconButtonContainer onPress={onPress} accessibilityRole="button">
      <IconSymbol size={size} name={name} color={color} />
    </IconButtonContainer>
  );
};
