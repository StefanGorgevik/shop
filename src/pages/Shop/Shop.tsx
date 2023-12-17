import { Button, Container, Grid, IconButton } from "@mui/material";
import { FC } from "react";
import { useGetProducts } from "../../queries/useGetProducts";
import { ProductCardPlaceholder } from "../../components/placeholders/ProductCardPlaceholder";
import { ProductCard } from "../../components/cards/ProductCard/ProductCard";
import { useCart } from "../../context/CartContext";
import CloseIcon from "@mui/icons-material/Close";
import { SnackbarKey, useSnackbar } from "notistack";

export const Shop: FC = () => {
  const { data: productsData, isLoading } = useGetProducts();
  const { addToCart, removeFromCart } = useCart();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleRemove = (id: SnackbarKey) => {
    removeFromCart(Number(id));
    closeSnackbar(id);
  };

  const handleUndo = (id: SnackbarKey) => {
    handleRemove(id);
    enqueueSnackbar(`Product removed. ${id}`, {
      key: id,
      action,
      variant: "success",
    });
  };

  const action = (snackbarId: SnackbarKey) => (
    <>
      <Button
        color="secondary"
        size="small"
        onClick={() => handleUndo(snackbarId)}
      >
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => closeSnackbar(snackbarId)}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const handleAddToCart = (id: number) => {
    addToCart(id);
    enqueueSnackbar(`Product added to cart. ${id}`, {
      key: id,
      action,
      variant: "success",
    });
  };

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
                addToCart={handleAddToCart}
                removeFromCart={removeFromCart}
              />
            ))}
      </Grid>
    </Container>
  );
};
