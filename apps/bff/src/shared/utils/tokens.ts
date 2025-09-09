import { IHttpClient } from '@full/common';
import { InjectionToken } from '@nestjs/common';

export const IHttpClientInjectionToken: InjectionToken<IHttpClient> = Symbol(
  'IHttpClientInjectionToken',
);
