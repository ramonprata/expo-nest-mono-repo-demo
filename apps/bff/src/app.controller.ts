import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { IHelloDto } from '@full/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): IHelloDto {
    return this.appService.getHello();
  }
}
