import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { FC, useCallback, useMemo } from "react";
import { useGetProduct } from "../../../queries/useGetProduct";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import "./CartCard.scss";
import { useCart, useCartQuantities } from "../../../context/CartContext";
import { QuantityInput } from "../../inputs/QuantityInput/QuantityInput";

export const CartCard: FC<{
  id: number;
}> = ({ id }) => {
  const { data: product } = useGetProduct(id);
  const cartQuantities = useCartQuantities();
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const quantity = useMemo(() => cartQuantities[id] ?? 0, [cartQuantities, id]);

  const handleIncrease = useCallback(() => {
    if (quantity === product?.stock) return;

    increaseQuantity(id);
  }, [id, increaseQuantity, product?.stock, quantity]);

  const handleDecrease = useCallback(() => {
    if (quantity === 1) {
      removeFromCart(id);
    } else {
      decreaseQuantity(id);
    }
  }, [decreaseQuantity, id, quantity, removeFromCart]);

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
      <Tooltip title="Remove from cart" placement="bottom">
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
        </Tooltip>

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

        <Box paddingBottom={10}>
          <QuantityInput
            value={quantity}
            isMaxValue={quantity === product.stock}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            className="light"
          />
        </Box>
      </Box>
    </Box>
  );
};
