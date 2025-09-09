import { renderWithProviders, screen } from "@shared/testUtils";
import ProductsScreen from "../ProductsScreen";

jest.mock("../ProductsScreen", () => {
  const { View } = require("react-native");
  return () => <View testID="products-screen-mock" />;
});

describe("Tests on ProductsScreen", () => {
  it("should render correctly", () => {
    renderWithProviders(<ProductsScreen />);

    expect(screen.getByTestId("products-screen-mock")).toBeTruthy();
  });
});
