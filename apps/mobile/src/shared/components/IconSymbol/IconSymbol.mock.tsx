import React from 'react';
import { Text } from 'react-native';

type Props = {
  name: string;
  size?: number;
  color?: string;
};

export function IconSymbolMock({ name, size = 24, color = 'black' }: Props) {
  return (
    <>
      <Text>IconSymbol Mock</Text>
      <Text testID="mock-icon-symbol" style={{ fontSize: size, color }}>
        {name}
      </Text>
    </>
  );
}
