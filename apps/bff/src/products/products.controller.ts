import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import type { Response } from 'express';

import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async getProducts(@Res({ passthrough: true }) res: Response) {
    try {
      return await this.productsService.getProducts();
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: (error as Error).message || 'Internal server error',
      });
    }
  }
}
