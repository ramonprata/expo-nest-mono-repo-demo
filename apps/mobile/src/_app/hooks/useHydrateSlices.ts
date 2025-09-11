import { useCallback, useEffect, useState } from 'react';

import { useProductsAction } from '@features/Products/hooks/useProductsSlice';

export const useHydrateSlices = () => {
  const [isHydrating, setIsHydrating] = useState(true);

  const hydrateExploreSlice = useProductsAction('hydrateSlice');

  const hydrate = useCallback(async () => {
    const allHydrateSlices = [hydrateExploreSlice()];

    try {
      await Promise.allSettled(allHydrateSlices);
    } catch (error) {
      console.warn('Failed to hydrate slices:', error);
    } finally {
      setIsHydrating(false);
    }
  }, [hydrateExploreSlice]);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  return {
    isHydrating,
  };
};
