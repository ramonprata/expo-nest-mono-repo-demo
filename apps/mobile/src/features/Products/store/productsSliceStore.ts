import { type IStorage, STORAGE_KEYS } from '@/src/shared/base';

import type { SetCallback } from '@shared/store';

export interface IProductsInitialState {
  favoriteProducts: string[];
}

export const initialState: IProductsInitialState = {
  favoriteProducts: [],
};

const actions = (
  set: SetCallback<IProductsInitialState>,
  storageInstance: IStorage,
) => ({
  addFavoriteProduct: (productId: string) =>
    set((state: IProductsInitialState) => {
      state.favoriteProducts.push(productId);

      storageInstance.set(
        STORAGE_KEYS.products.favoriteProducts,
        state.favoriteProducts,
      );
    }),

  removeFavoriteProduct: (productId: string) =>
    set((state: IProductsInitialState) => {
      state.favoriteProducts = state.favoriteProducts.filter(
        (id) => id !== productId,
      );

      storageInstance.set(STORAGE_KEYS.products.favoriteProducts, null);
    }),

  hydrateSlice: async () => {
    const loadedFavoriteProducts = await storageInstance.get<
      IProductsInitialState['favoriteProducts']
    >(STORAGE_KEYS.products.favoriteProducts);

    set((state: IProductsInitialState) => {
      state.favoriteProducts = loadedFavoriteProducts || [];
    });
  },

  resetProductsSlice: () =>
    set((state) => {
      state.favoriteProducts = initialState.favoriteProducts;
      storageInstance.set(STORAGE_KEYS.products.favoriteProducts, null);
    }),
});

const slice = (
  set: SetCallback<IProductsInitialState>,
  storageInstance: IStorage,
) => ({
  ...initialState,
  ...actions(set, storageInstance),
});

export type TProductsActions = ReturnType<typeof actions>;

const productsSliceStore = {
  slice,
  initialState,
};

export default productsSliceStore;
