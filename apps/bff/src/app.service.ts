import { Injectable } from '@nestjs/common';
import type { IHelloDto } from '@full/shared';

@Injectable()
export class AppService {
  getHello(): IHelloDto {
    return { data: 'Hello World!' };
  }
}
