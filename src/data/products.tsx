// data/products.ts

import { ProductsData } from "../types/products";

export const getProducts = async (): Promise<ProductsData> => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await res.json();
  return data;
};
