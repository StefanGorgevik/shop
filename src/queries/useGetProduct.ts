import { useQuery } from "react-query";
import { getProduct } from "../data/products";

export const useGetProduct = (id?: string) => {
  return useQuery(["product", id], () => getProduct(id));
};
