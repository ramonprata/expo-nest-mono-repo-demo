import { CrashlyticsMock } from './Crashlytics.mock';
import { CrashlyticsService } from './CrashlyticsService';
import { ICrashlyticsService } from './ICrashlyticsService';

const useMock = process.env.EXPO_PUBLIC_USE_MOCK_NATIVE_MODULES === 'true';

export const crashlyticsService: ICrashlyticsService = useMock
  ? new CrashlyticsMock()
  : new CrashlyticsService();

export * from './ICrashlyticsService';
