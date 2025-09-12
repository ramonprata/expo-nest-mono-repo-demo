import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { ProductsModule } from './products/products.module';
import { CameraModule } from './camera/camera.module';

@Module({
  imports: [ProductsModule, CameraModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
