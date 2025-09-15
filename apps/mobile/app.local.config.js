import 'dotenv/config';

const APP_VARIANT = process.env.EXPO_PUBLIC_APP_VARIANT;

const EAS_PROJECT_ID = '70c744ce-2e57-410f-bda3-244dbd6fa067';

// DEVELOPMENT
const APP_NAME_DEV = 'mobile-dev';
const BUILD_IDENTIFIER_DEV = 'com.companyname.mobile.dev';
const PACKAGE_DEV = 'com.companyname.mobile.dev';
const VERSION_NAME_DEV = '1.0.0';
const ANDROID_VERSION_CODE_DEV = 1;
const IOS_BUILD_NUMBER_DEV = '1';
const GOOGLE_SERVICES_FILE_DEV_IOS = './GoogleService-Info-dev.plist';
const GOOGLE_SERVICES_FILE_DEV_ANDROID = './google-services-dev.json';

// PREVIEW
const APP_NAME_PREVIEW = 'mobile-preview';
const BUILD_IDENTIFIER_PREVIEW = 'com.companyname.mobile.dev';
const PACKAGE_PREVIEW = 'com.companyname.mobile.dev';
const VERSION_NAME_PREVIEW = '1.0.0';
const ANDROID_VERSION_CODE_PREVIEW = 1;
const IOS_BUILD_NUMBER_PREVIEW = '1';
const GOOGLE_SERVICES_FILE_PREVIEW_IOS = './GoogleService-Info-preview.plist';
const GOOGLE_SERVICES_FILE_PREVIEW_ANDROID = './google-services-dev.json';

const appVariants = {
  development: {
    name: APP_NAME_DEV,
    version: VERSION_NAME_DEV,
    ios: {
      buildNumber: IOS_BUILD_NUMBER_DEV,
      bundleIdentifier: BUILD_IDENTIFIER_DEV,
      // googleServicesFile: GOOGLE_SERVICES_FILE_DEV_IOS,
    },
    android: {
      versionCode: ANDROID_VERSION_CODE_DEV,
      package: PACKAGE_DEV,
      googleServicesFile: GOOGLE_SERVICES_FILE_DEV_ANDROID,
    },
  },
  preview: {
    name: APP_NAME_PREVIEW,
    version: VERSION_NAME_PREVIEW,
    ios: {
      buildNumber: IOS_BUILD_NUMBER_PREVIEW,
      bundleIdentifier: BUILD_IDENTIFIER_PREVIEW,
      // googleServicesFile: GOOGLE_SERVICES_FILE_PREVIEW_IOS,
    },
    android: {
      versionCode: ANDROID_VERSION_CODE_PREVIEW,
      package: PACKAGE_PREVIEW,
      googleServicesFile: GOOGLE_SERVICES_FILE_PREVIEW_ANDROID,
    },
  },
};

const API_URL = process.env.EXPO_PUBLIC_API_URL;

const config = {
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
    bundleIdentifier: appVariants[APP_VARIANT].ios.bundleIdentifier,
    buildNumber: appVariants[APP_VARIANT].ios?.buildNumber,
    googleServicesFile: appVariants[APP_VARIANT].ios?.googleServicesFile,
    supportsTablet: false,
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

export default config;
