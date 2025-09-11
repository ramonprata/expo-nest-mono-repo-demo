import { StorageKey, StorageTypeEnum } from './types';

const STORAGE_PREFIX = 'appName';

export const STORAGE_KEYS = {
  // storage keys app level
  accessToken: {
    key: `${STORAGE_PREFIX}_access_token`,
    type: StorageTypeEnum.SECURE,
  } satisfies StorageKey,

  // storage keys feature level
  products: {
    favoriteProducts: {
      key: `${STORAGE_PREFIX}_favorite_products`,
      type: StorageTypeEnum.COMMON,
    } satisfies StorageKey,
  },
};
