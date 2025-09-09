import { Module } from '@nestjs/common';

import { ApiDemoModule } from '@bff-shared/apis/api-demo';

import { ProductMapper } from './product.mappers';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductMapperInjectionToken } from './types/product-mapper';

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
