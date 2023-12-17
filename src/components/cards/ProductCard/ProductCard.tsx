import { Card, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { FC, useMemo } from "react";
import { Product } from "../../../types/products";
import "./ProductCard.css";
import { ProductCardActions } from "./components/ProductCardActions";
import { ProductCardContent } from "./components/ProductCardContent";
import { useAuth } from "../../../context/AuthContext";
import { useCartQuantities } from "../../../context/CartContext";

export const ProductCard: FC<{
  product: Product;
}> = ({ product }) => {
  const { isLoggedIn } = useAuth();
  const cartQuantities = useCartQuantities();

  const quantity = useMemo(
    () => cartQuantities[product.id] ?? 0,
    [cartQuantities, product.id]
  );

  return (
    <Grid item xs={2} sm={4} md={4} key={product.id} style={{ height: "100%" }}>
      <Card
        variant="elevation"
        raised
        style={{ height: "100%", minHeight: 400 }}
      >
        <CardHeader
          title={
            <Typography variant="h6" className="title">
              {product.title}
            </Typography>
          }
          noWrap
          subheader={
            <Typography variant="body2">{product.category}</Typography>
          }
        />

        <CardMedia
          component="img"
          image={product.thumbnail}
          alt="Paella dish"
          style={{ maxHeight: 200, objectFit: "contain", minHeight: 200 }}
        />
        <ProductCardContent product={product} />
        {isLoggedIn && (
          <ProductCardActions
            productId={product.id}
            quantity={quantity}
            productQuantity={product.stock}
          />
        )}
      </Card>
    </Grid>
  );
};
