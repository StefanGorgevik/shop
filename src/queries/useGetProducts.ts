import { useQuery } from "react-query";
import { getProducts } from "../data/products";

export const useGetProducts = () => useQuery(["products"], getProducts);
