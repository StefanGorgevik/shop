import { Container, Grid } from "@mui/material";
import { FC } from "react";
import { useGetProducts } from "../../queries/useGetProducts";
import { ProductCardPlaceholder } from "../../components/placeholders/ProductCardPlaceholder";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";

export const Shop: FC = () => {
  const { data: productsData, isLoading } = useGetProducts();
  const { addToCart } = useCart();

  return (
    <Container>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 1, sm: 8, md: 12 }}
        paddingBottom={10}
      >
        {isLoading
          ? Array.from(Array(3).keys()).map((n) => (
              <ProductCardPlaceholder key={n} />
            ))
          : productsData?.products?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
      </Grid>
    </Container>
  );
};
