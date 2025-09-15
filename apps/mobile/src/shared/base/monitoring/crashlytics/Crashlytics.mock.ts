// src/services/crashlytics/CrashlyticsMock.ts
import { ICrashlyticsService } from './ICrashlyticsService';

export class CrashlyticsMock implements ICrashlyticsService {
  log(message: string) {
    console.log('[Crashlytics Mock] log:', message);
  }

  recordError(error: Error, context?: Record<string, any>) {
    console.error('[Crashlytics Mock] error:', error, context);
  }

  setUserId(userId: string | null) {
    console.log('[Crashlytics Mock] setUserId:', userId);
  }

  setAttribute(key: string, value: string) {
    console.log('[Crashlytics Mock] setAttribute:', key, value);
  }

  setAttributes(attributes: Record<string, string>) {
    console.log('[Crashlytics Mock] setAttributes:', attributes);
  }
}
