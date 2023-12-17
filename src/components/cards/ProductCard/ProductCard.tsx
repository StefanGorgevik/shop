import { Card, CardHeader, CardMedia, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Product } from "../../../types/products";
import "./ProductCard.css";
import { ProductCardActions } from "./components/ProductCardActions";
import { ProductCardContent } from "./components/ProductCardContent";

export const ProductCard: FC<{
  product: Product;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}> = ({ product, addToCart, removeFromCart }) => {
  return (
    <Grid item xs={2} sm={4} md={4} key={product.id} style={{ height: "100%" }}>
      <Card variant="elevation" raised style={{ height: "100%" }}>
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
          style={{ maxHeight: 200, objectFit: "contain" }}
        />
        <ProductCardContent product={product} />
        <ProductCardActions productId={product.id} addToCart={addToCart} removeFromCart={removeFromCart} />
      </Card>
    </Grid>
  );
};
