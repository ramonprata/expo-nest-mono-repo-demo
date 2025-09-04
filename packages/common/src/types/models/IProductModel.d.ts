export interface IProductModel {
    id: string;
    name: string;
    description: string;
    price: number;
    image?: {
        filePath: string;
        alt?: string;
    };
}
