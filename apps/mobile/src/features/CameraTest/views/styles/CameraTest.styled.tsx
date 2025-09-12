import styled from '@emotion/native';

export const IconContainer = styled.View`
  margin-bottom: 24px;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background || '#fff'};
  margin-top: auto;
  margin-bottom: auto;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text || '#000'};
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text || '#666'};
  text-align: center;
  line-height: 24px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #007aff;
  padding: 16px 32px;
  border-radius: 8px;
  margin-top: 32px;
  min-width: 150px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 3;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
