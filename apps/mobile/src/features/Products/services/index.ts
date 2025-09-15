import { eComApi } from '@shared/api';
import { BaseError } from '@shared/base';

import { ProductsManager } from './ProductsManager';
import { ProductsRepository } from './ProductsRepository';
import mappers from '../utils/mappers';

const productsRepository = new ProductsRepository(eComApi);
const productsManager = new ProductsManager(
  productsRepository,
  mappers,
  new BaseError('ProductsManager'),
);

export default productsManager;
