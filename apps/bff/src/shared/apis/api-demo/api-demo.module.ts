// api.module.ts
import { Module } from '@nestjs/common';
import { ApiDemoAdapter } from './api-demo.adapter';
import { AxiosHttpClient, type IAxiosHttpClientConfig } from '@full/common';
import { DemoApiPortToken, IHttpClientToken } from './types/tokens';

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
      provide: IHttpClientToken,
      useFactory: () => new AxiosHttpClient(defaultAxiosConfig),
    },
    {
      provide: DemoApiPortToken,
      useClass: ApiDemoAdapter,
    },
  ],
  exports: [DemoApiPortToken],
})
export class ApiDemoModule {}
