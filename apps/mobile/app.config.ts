import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:3000';

  return {
    ...config,
    name: 'mobile',
    slug: 'mobile',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'mobile',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    platforms: ['ios', 'android'],
    extra: {
      apiUrl, // variável que você pode usar no código
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
    },

    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
  };
};
