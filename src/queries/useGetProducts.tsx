import { useQuery } from "react-query";
import { getProducts } from "../data/products";

export const useGetProducts = () => {
  return useQuery(["products"], getProducts);
};
