import { IProductView } from "../../types/IProduct";

export const PRODUCT_MOCK: IProductView = {
  id: "1",
  name: "Product 1",
  description: "Description 1",
  price: "$10.00",
  image: {
    filePath: "https://via.placeholder.com/150",
    alt: "Product 1",
  },
};
export const PRODUCTS_MOCK: IProductView[] = [
  {
    id: "1",
    name: "Product 1",
    description: "Description 1",
    price: "$10.00",
    image: {
      filePath: "https://via.placeholder.com/150",
      alt: "Product 1",
    },
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description 2",
    price: "$20.00",
    image: {
      filePath: "https://via.placeholder.com/150",
      alt: "Product 2",
    },
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description 3",
    price: "$30.00",
    image: {
      filePath: "https://via.placeholder.com/150",
      alt: "Product 3",
    },
  },
];
