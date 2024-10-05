export interface Product {
  id: number;
  title: string;
  summary: string;
  price: number;
  discount: number;
  description: string;
  colors: string[];
  style: string[];
  typeCategory: string;
  detail: {
    style: string;
    dimension: string;
    materials: string[];
    SKU: string;
  };
}