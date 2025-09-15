import { getApp } from '@react-native-firebase/app';
import {
  getCrashlytics,
  log,
  recordError,
  setUserId,
  setAttribute,
} from '@react-native-firebase/crashlytics';

import { ICrashlyticsService } from './ICrashlyticsService';

export class CrashlyticsService implements ICrashlyticsService {
  private crashlytics = getCrashlytics();

  log(message: string) {
    log(this.crashlytics, message);
  }

  recordError(error: Error, context?: Record<string, any>) {
    if (context) {
      Object.entries(context).forEach(([key, value]) => {
        setAttribute(this.crashlytics, key, String(value));
      });
    }
    recordError(this.crashlytics, error);
  }

  setUserId(userId: string | null) {
    setUserId(this.crashlytics, userId ?? '');
  }

  setAttribute(key: string, value: string) {
    setAttribute(this.crashlytics, key, value);
  }

  setAttributes(attributes: Record<string, string>) {
    Object.entries(attributes).forEach(([key, value]) => {
      setAttribute(this.crashlytics, key, value);
    });
  }
}
