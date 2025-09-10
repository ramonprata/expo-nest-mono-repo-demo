import { ActivityIndicator, Button } from 'react-native';

import { useCurrentLocation } from '@/src/shared/hooks/useCurrentLocation';

import { BoxContent, ThemedText } from '@shared/components';

import { Container, Section } from './styles/LocationTestScreen.styled';
import { useGeofencingResult } from '../hooks/useGeofencingResult';

export default function LocationTestScreen() {
  const { refetch } = useCurrentLocation();
  const { mutate, isPending, isInsideResort, error } = useGeofencingResult();

  const handleCheck = async () => {
    const { data: location } = await refetch();

    if (!location) {
      console.warn('Location not available');
      return;
    }

    mutate({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const renderContent = () => {
    if (isPending) {
      return (
        <BoxContent center>
          <ActivityIndicator size="large" color={'white'} />
        </BoxContent>
      );
    }

    if (error) {
      return (
        <>
          <ThemedText type="defaultSemiBold">
            Erro ao verificar localização
          </ThemedText>
          <ThemedText type="defaultSemiBold">{error.message}</ThemedText>
        </>
      );
    }

    const userLocationStatus = isInsideResort ? 'Dentro' : 'Fora';

    return <ThemedText type="subtitle">{userLocationStatus}</ThemedText>;
  };

  return (
    <Container contentContainerStyle={{ paddingBottom: 32 }}>
      <BoxContent gap={16}>
        <Section>{renderContent()}</Section>

        <Button title="Verificar Localização" onPress={handleCheck} />
      </BoxContent>
    </Container>
  );
}
