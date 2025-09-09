import { View } from "react-native";

import { BoxContent } from "@shared/components";

import EmptyProducts from "./EmptyProducts";
import LoadingIndicator from "./LoadingIndicator";
import ProductCard from "./ProductCard";
import { useLoadProducts } from "../../hooks/useProductsData";
import { type IProductView } from "../../types/IProduct";
import { List } from "../styles/ProductList.styled";

const ProductList = () => {
  const { products, isLoading } = useLoadProducts();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (!products) {
    return <EmptyProducts />;
  }

  return (
    <BoxContent>
      <List
        data={products}
        keyExtractor={(item) => (item as IProductView).id.toString()}
        renderItem={({ item }) => (
          <ProductCard full product={item as IProductView} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={{ paddingBottom: 32 }}
      />
    </BoxContent>
  );
};

export default ProductList;
