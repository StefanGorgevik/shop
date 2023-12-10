import { Product, ProductsData } from "../types/products";

export const getProducts = async (): Promise<ProductsData> => {
  const res = await fetch("https://dummyjson.com/product/search?q=sport");
  if (!res.ok) {
    throw new Error("Failed to fetch products.");
  }
  const data = await res.json();
  return data;
};

export const getProduct = async (productId: number): Promise<Product> => {
  const res = await fetch(`https://dummyjson.com/products/${productId}`);
  if (!res.ok) {
    throw new Error("Failed to fetch the selected product.");
  }
  const data = await res.json();
  return data;
};
