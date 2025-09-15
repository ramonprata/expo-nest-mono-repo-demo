export interface ICrashlyticsService {
  log(message: string): void;
  recordError(error: Error, context?: Record<string, any>): void;
  setUserId(userId: string | null): void;
  setAttribute(key: string, value: string): void;
  setAttributes(attributes: Record<string, string>): void;
}
