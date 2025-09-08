export interface IProductDto {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: { filePath: string; alt?: string };
}
