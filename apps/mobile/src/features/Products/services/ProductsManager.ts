import { BaseError, BaseManager } from '@shared/base';

import type { IProductView } from '../types/IProduct';
import type { IProductRepository } from '../types/IProductRepository';
import type { TProductsMappers } from '../types/TProductsMappers';

export class ProductsManager extends BaseManager {
  private repository: IProductRepository;
  private mappers: TProductsMappers;
  private errorLogger: BaseError;

  constructor(
    _repository: IProductRepository,
    _mappers: TProductsMappers,
    _errorLogger: BaseError,
  ) {
    super();
    this.repository = _repository;
    this.mappers = _mappers;
    this.errorLogger = _errorLogger;
  }

  async getProducts(): Promise<IProductView[]> {
    try {
      const response = await this.repository.fetchProducts();
      return this.mappers.getProducts.transform(response.data);
    } catch (error) {
      this.handleError(error, () => {
        this.errorLogger.registerError('Failed to fetch products', { error });
      });
    }
  }

  async getHighlightedProducts(): Promise<IProductView[]> {
    try {
      const response = await this.repository.fetchHighlightedProducts();
      return this.mappers.getProducts.transform(response.data.slice(0, 2));
    } catch (error) {
      this.handleError(error, () => {
        this.errorLogger.registerError('Failed to fetch highlighted products');
      });
    }
  }
}
