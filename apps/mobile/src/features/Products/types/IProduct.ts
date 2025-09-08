export interface IProductView {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: { filePath: string; alt?: string };
}
