import { useQuery } from "@tanstack/react-query";

import productsManager from "../services";

export const useLoadProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-all-products"],
    queryFn: () => productsManager.getProducts(),
  });

  return { products: data.length ? data : null, error, isLoading };
};

export const useLoadHighlightedProducts = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-highlighted-products"],
    queryFn: () => productsManager.getHighlightedProducts(),
  });

  return { products: data.length ? data : null, error, isLoading };
};
