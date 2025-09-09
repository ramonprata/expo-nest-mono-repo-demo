export interface IProductRequest {
  name: string;
  description: string;
  price_usd: number;
  image: { file_path: string; alt: string };
}
