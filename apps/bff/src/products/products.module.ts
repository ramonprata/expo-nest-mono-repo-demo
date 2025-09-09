import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiDemoModule } from '@bff-shared/apis/api-demo';
import { ProductsController } from './products.controller';
import { ProductMapperInjectionToken } from './types/product-mapper';
import { ProductMapper } from './product.mappers';

@Module({
  controllers: [ProductsController],
  imports: [ApiDemoModule],
  providers: [
    ProductsService,
    {
      provide: ProductMapperInjectionToken,
      useClass: ProductMapper,
    },
  ],
  exports: [ProductsService],
})
export class ProductsModule {}
