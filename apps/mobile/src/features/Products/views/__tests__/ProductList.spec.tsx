import { renderWithProviders } from '@shared/testUtils';

import { PRODUCTS_MOCK } from './productsData.mock';
import { useLoadProducts } from '../../hooks/useProductsData';
import ProductList from '../components/ProductList';

jest.mock('../../hooks/useProductsData', () => {
  return {
    useLoadProducts: jest.fn(),
  };
});

jest.mock('../components/LoadingIndicator', () => {
  const { View } = require('react-native');
  return () => <View testID="loading-indicator" />;
});

jest.mock('../components/ProductCard', () => {
  const { View } = require('react-native');
  return () => <View testID="product-card-mock" />;
});

describe('Tests on ProductList', () => {
  const mockUseLoadProducts = jest.mocked(useLoadProducts);

  beforeEach(() => {});

  describe('Testing rendering', () => {
    it('should render the loading indicator when fetching products', () => {
      mockUseLoadProducts.mockReturnValueOnce({
        products: null,
        isLoading: true,
        error: null,
      });

      const { getByTestId } = renderWithProviders(<ProductList />);
      expect(getByTestId('loading-indicator')).not.toBeNull();
    });

    it('should render empty state when there are no products to list', () => {
      mockUseLoadProducts.mockReturnValueOnce({
        products: null,
        isLoading: false,
        error: null,
      });

      const { getByText } = renderWithProviders(<ProductList />);
      expect(getByText('No products available')).not.toBeNull();
    });
    it('should render products when successfuly fetched', () => {
      mockUseLoadProducts.mockReturnValueOnce({
        products: PRODUCTS_MOCK,
        isLoading: false,
        error: null,
      });

      const { queryAllByTestId } = renderWithProviders(<ProductList />);
      expect(queryAllByTestId('product-card-mock')).toHaveLength(
        PRODUCTS_MOCK.length,
      );
    });
  });
});
