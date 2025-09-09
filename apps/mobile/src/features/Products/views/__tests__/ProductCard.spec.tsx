import { renderWithProviders, screen, userEvent } from "@shared/testUtils";

import { PRODUCT_MOCK } from "./productsData.mock";
import {
  useProductsAction,
  useProductsState,
} from "../../hooks/useProductsSlice";
import ProductCard from "../components/ProductCard";

jest.mock("../../hooks/useProductsSlice");

describe("Tests on ProductCard", () => {
  const mockAddFavoriteProduct = jest.fn();
  const mockRemoveFavoriteProduct = jest.fn();
  const mockUseProductsState = jest.mocked(useProductsState);
  const mockUseProductsAction = jest.mocked(useProductsAction);
  const user = userEvent.setup();

  const mockActions = () => {
    mockUseProductsAction.mockImplementation((actionName) => {
      if (actionName === "addFavoriteProduct") {
        return mockAddFavoriteProduct;
      }
      if (actionName === "removeFavoriteProduct") {
        return mockRemoveFavoriteProduct;
      }
      return jest.fn();
    });
  };

  const mockState = (favoriteProducts: string[]) => {
    mockUseProductsState.mockImplementation((stateName) => {
      if (stateName === "favoriteProducts") {
        return favoriteProducts;
      }
      return [] as never;
    });
  };

  beforeEach(() => {
    jest.clearAllMocks();
    mockActions();
    mockState([]);
  });

  describe("Testing rendering", () => {
    it("should render correctly", () => {
      renderWithProviders(<ProductCard product={PRODUCT_MOCK} />);

      expect(screen.getByText(PRODUCT_MOCK.name)).not.toBeNull();
    });

    it("should show heart icon when product is not favorite", () => {
      mockState([]);

      renderWithProviders(<ProductCard product={PRODUCT_MOCK} />);

      expect(screen.getByText(/heart/)).not.toBeNull();
    });

    it("should show heart fill icon when product is favorite", () => {
      mockState(["1"]);

      renderWithProviders(<ProductCard product={PRODUCT_MOCK} />);

      expect(screen.getByText(/heart.fill/)).not.toBeNull();
    });
  });

  describe("Testing user events", () => {
    it("should add product to favorites when product is not a favorite yet", async () => {
      mockState([]);

      renderWithProviders(<ProductCard product={PRODUCT_MOCK} />);

      const heartButton = screen.getByRole("button");
      await user.press(heartButton);

      expect(mockAddFavoriteProduct).toHaveBeenCalledWith("1");
    });

    it("should remove product from favortites when pressing on heart fill icon", async () => {
      mockState(["1"]);

      renderWithProviders(<ProductCard product={PRODUCT_MOCK} />);

      const heartFillButton = screen.getByRole("button");
      await user.press(heartFillButton);

      expect(mockRemoveFavoriteProduct).toHaveBeenCalledWith("1");
    });
  });
});
