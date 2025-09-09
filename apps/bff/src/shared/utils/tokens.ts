import { InjectionToken } from '@nestjs/common';

import { IHttpClient } from '@full/common';

export const IHttpClientInjectionToken: InjectionToken<IHttpClient> = Symbol(
  'IHttpClientInjectionToken',
);
