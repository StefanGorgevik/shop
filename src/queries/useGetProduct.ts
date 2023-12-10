import { useQuery } from "react-query";
import { getProduct } from "../data/products";

export const useGetProduct = (id: number) =>
  useQuery(["product", id], () => getProduct(id));
