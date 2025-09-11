import { useFonts } from 'expo-font';

import { useColorScheme } from '@shared/hooks/useColorScheme';

import { useHydrateSlices } from './useHydrateSlices';

export const useInitializeApp = () => {
  // Initialize app state and perform any necessary setup

  const { isHydrating } = useHydrateSlices();

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../../assets/fonts/SpaceMono-Regular.ttf'),
  });

  return {
    colorScheme,
    loaded,
    isHydrating,
  };
};
