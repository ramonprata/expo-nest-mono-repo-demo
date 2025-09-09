// api.module.ts
import { Module } from '@nestjs/common';

import { AxiosHttpClient, type IAxiosHttpClientConfig } from '@full/common';

import { ApiDemo } from './api-demo.adapter';
import { DemoApiInjectionToken } from './api-demo.port';
import { IHttpClientInjectionToken } from '../../utils';

// TODO - CHEDK HOW TO USE CONFIG SERVICE
// {
//   provide: 'IHttpClient',
//   useFactory: (configService: ConfigService) =>
//     new AxiosHttpClient({ baseURL: configService.get('API_URL') }),
//   inject: [ConfigService],
// }
const defaultAxiosConfig: IAxiosHttpClientConfig = {
  baseURL: 'https://api.example.com',
  timeout: 5000,
};

@Module({
  providers: [
    {
      provide: IHttpClientInjectionToken,
      useFactory: () => new AxiosHttpClient(defaultAxiosConfig),
    },
    {
      provide: DemoApiInjectionToken,
      useClass: ApiDemo,
    },
  ],
  exports: [DemoApiInjectionToken],
})
export class ApiDemoModule {}
