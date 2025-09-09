import { useFonts } from "expo-font";

import { useColorScheme } from "@shared/hooks/useColorScheme";

export const useInitializeApp = () => {
  // Initialize app state and perform any necessary setup
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return {
    colorScheme,
    loaded,
  };
};
