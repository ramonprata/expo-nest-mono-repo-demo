import 'dotenv/config';
import { ExpoConfig } from '@expo/config';

const APP_VARIANT = 'production';

const EAS_PROJECT_ID = '<COMPANY_EAS_PROJECT_ID>';

// PRODUCTION
const APP_NAME_PRODUCTION = 'mobile';
const BUILD_IDENTIFIER_PRODUCTION = 'com.companyname.mobile';
const PACKAGE_PRODUCTION = 'com.companyname.mobile';
const VERSION_NAME_PRODUCTION = '1.0.0';
const ANDROID_VERSION_CODE_PRODUCTION = 1;
const IOS_BUILD_NUMBER_PRODUCTION = '1';
const GOOGLE_SERVICES_FILE_PRODUCTION_IOS = './GoogleService-Info.plist';
const GOOGLE_SERVICES_FILE_PRODUCTION_ANDROID = './google-services.json';

const appVariants = {
  production: {
    name: APP_NAME_PRODUCTION,
    version: VERSION_NAME_PRODUCTION,
    ios: {
      buildNumber: IOS_BUILD_NUMBER_PRODUCTION,
      bundleIdentifier: BUILD_IDENTIFIER_PRODUCTION,
      googleServicesFile: GOOGLE_SERVICES_FILE_PRODUCTION_IOS,
    },
    android: {
      versionCode: ANDROID_VERSION_CODE_PRODUCTION,
      package: PACKAGE_PRODUCTION,
      googleServicesFile: GOOGLE_SERVICES_FILE_PRODUCTION_ANDROID,
    },
  },
};

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const config: ExpoConfig = {
  name: appVariants[APP_VARIANT].name,
  slug: 'mobile',
  scheme: 'mobile',
  version: appVariants[APP_VARIANT].version,
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  userInterfaceStyle: 'automatic',
  newArchEnabled: true,
  platforms: ['ios', 'android'],

  ios: {
    bundleIdentifier: appVariants[APP_VARIANT].ios?.bundleIdentifier,
    buildNumber: appVariants[APP_VARIANT].ios?.buildNumber,
    googleServicesFile: appVariants[APP_VARIANT].ios?.googleServicesFile,
    supportsTablet: true,
  },

  android: {
    package: appVariants[APP_VARIANT].android?.package,
    versionCode: appVariants[APP_VARIANT].android?.versionCode,
    googleServicesFile: appVariants[APP_VARIANT].android?.googleServicesFile,
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
    edgeToEdgeEnabled: true,
  },

  extra: {
    apiUrl: API_URL,
  },

  plugins: [
    'expo-router',
    '@react-native-firebase/app',
    '@react-native-firebase/crashlytics',
    [
      'expo-splash-screen',
      {
        image: './assets/images/splash-icon.png',
        imageWidth: 200,
        resizeMode: 'contain',
        backgroundColor: '#ffffff',
      },
    ],
    [
      'expo-build-properties',
      {
        ios: {
          useFrameworks: 'static',
        },
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
};

export default config;
