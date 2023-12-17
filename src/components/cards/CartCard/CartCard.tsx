import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";
import { useGetProduct } from "../../../queries/useGetProduct";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import "./CartCard.scss";

export const CartCard: FC<{
  id: number;
  removeFromCart: (id: number) => void;
}> = ({ id, removeFromCart }) => {
  const { data: product } = useGetProduct(id);

  if (!product) return null;
  return (
    <Box className="cartCard">
      <Box className="cartCardWrapper">
        <img
          src={product.thumbnail}
          alt="thumbnail"
          className="cartCardImage"
        />
        <Box className="cartCardInfo">
          <Typography variant="h4" color="white">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {product.description.substring(0, 50)}
          </Typography>
          <Typography variant="overline" color="white">
            {product.category}
          </Typography>
        </Box>
      </Box>

      <Box className="cartCardActions">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => removeFromCart(id)}
          color="warning"
        >
          <RemoveShoppingCartIcon />
        </IconButton>

        <Box className="priceWrapper">
          <Typography
            className="priceTypography"
            variant="overline"
            color="secondary"
          >
            Price:
          </Typography>
          <Typography className="price" variant="overline" color="secondary">
            {product.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
