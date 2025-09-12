import 'dotenv/config';
import { ExpoConfig, ConfigContext } from '@expo/config';

const APP_VARIANT = process.env.EXPO_PUBLIC_APP_VARIANT;

const EAS_PROJECT_ID = '<COMPANY_EAS_PROJECT_ID>';

// PREVIEW
const APP_NAME_PREVIEW = 'mobile-preview';
const BUILD_IDENTIFIER_PREVIEW = 'com.companyname.mobile.preview';
const PACKAGE_PREVIEW = 'com.companyname.mobile.preview';
const VERSION_NAME_PREVIEW = '1.0.0';
const ANDROID_VERSION_CODE_PREVIEW = 0;
const IOS_BUILD_NUMBER_PREVIEW = '0';
const GOOGLE_SERVICES_FILE_PREVIEW_IOS = './GoogleService-Info-preview.plist';
const GOOGLE_SERVICES_FILE_PREVIEW_ANDROID = './google-services-preview.json';

// PRODUCTION
const APP_NAME_PRODUCTION = 'mobile';
const BUILD_IDENTIFIER_PRODUCTION = 'com.companyname.mobile';
const PACKAGE_PRODUCTION = 'com.companyname.mobile';
const VERSION_NAME_PRODUCTION = '1.0.0';
const ANDROID_VERSION_CODE_PRODUCTION = 0;
const IOS_BUILD_NUMBER_PRODUCTION = '0';
const GOOGLE_SERVICES_FILE_PRODUCTION_IOS = './GoogleService-Info.plist';
const GOOGLE_SERVICES_FILE_PRODUCTION_ANDROID = './google-services.json';

const appVariants = {
  preview: {
    name: APP_NAME_PREVIEW,
    version: VERSION_NAME_PREVIEW,
    ios: {
      buildNumber: IOS_BUILD_NUMBER_PREVIEW,
      bundleIdentifier: BUILD_IDENTIFIER_PREVIEW,
      googleServicesFile: GOOGLE_SERVICES_FILE_PREVIEW_IOS,
    },
    android: {
      versionCode: ANDROID_VERSION_CODE_PREVIEW,
      package: PACKAGE_PREVIEW,
      googleServicesFile: GOOGLE_SERVICES_FILE_PREVIEW_ANDROID,
    },
  },
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

export default ({ config }: ConfigContext): ExpoConfig => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL;

  return {
    ...config,
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
      bundleIdentifier: appVariants[APP_VARIANT].ios?.bundlweIdentifier,
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
      eas: {
        projectId: EAS_PROJECT_ID,
      },
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
};
