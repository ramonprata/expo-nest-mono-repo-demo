export interface IProductResponse {
  id: number;
  name: string;
  description: string;
  price_usd: number;
  image: { file_path: string; alt: string };
}
