export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  description: string;
  colors: string[];
  sizes: string[];
  rating: number;
  badge?: string;
};