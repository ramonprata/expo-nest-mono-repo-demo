import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiDemoModule } from '../apis/api-demo/api-demo.module';
import { ProductsController } from './products.controller';

@Module({
  controllers: [ProductsController],
  imports: [ApiDemoModule],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
