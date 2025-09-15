import { crashlyticsService } from '../monitoring/crashlytics';

export enum ErrorSeverityEnum {
  LOG = 'log',
  NON_FATAL = 'non-fatal',
}

export class BaseError extends Error {
  public context?: Record<string, any>;
  public severity: ErrorSeverityEnum;

  constructor(name: string) {
    super();
    this.name = name;
  }

  register(
    message: string,
    severity: ErrorSeverityEnum = ErrorSeverityEnum.NON_FATAL,
    context?: Record<string, any>,
  ) {
    this.message = message;
    this.context = context;
    this.severity = severity;

    if (severity === ErrorSeverityEnum.NON_FATAL) {
      crashlyticsService.recordError(this, context);
    } else {
      crashlyticsService.log(
        `${this.name}: ${message} | ${JSON.stringify(context)}`,
      );
    }
  }

  logError(message: string, context?: Record<string, any>) {
    this.register(message, ErrorSeverityEnum.LOG, context);
  }

  registerError(message: string, context?: Record<string, any>) {
    this.register(message, ErrorSeverityEnum.NON_FATAL, context);
  }
}
