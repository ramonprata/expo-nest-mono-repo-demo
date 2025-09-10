import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { LocationModule } from './location/location.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, LocationModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
