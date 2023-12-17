import { Button, CardActions, Tooltip } from "@mui/material";
import { FC, useCallback } from "react";
import "../ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { QuantityInput } from "../../../inputs/QuantityInput/QuantityInput";
import { useCart } from "../../../../context/CartContext";

export const ProductCardActions: FC<{
  productId: number;
  quantity: number;
  productQuantity: number;
}> = ({ productId, quantity, productQuantity }) => {
  const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();

  const handleAddToCart = useCallback(() => {
    addToCart(productId);
  }, [addToCart, productId]);

  const handleIncrease = useCallback(() => {
    if (quantity === productQuantity) return;

    increaseQuantity(productId);
  }, [increaseQuantity, productId, productQuantity, quantity]);

  const handleDecrease = useCallback(() => {
    if (quantity === 1) {
      removeFromCart(productId);
    } else {
      decreaseQuantity(productId);
    }
  }, [decreaseQuantity, productId, quantity, removeFromCart]);

  return (
    <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
      <Tooltip title="See product">
        <Button
          size="small"
          variant="outlined"
          onClick={() => navigate(`/product/${productId}`)}
          sx={{ width: 100 }}
        >
          <VisibilityIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Add to wishlist">
        <Button size="small" variant="outlined" sx={{ width: 100 }}>
          <FavoriteBorderIcon />
        </Button>
      </Tooltip>
      {quantity < 1 ? (
        <Tooltip title="Add to cart">
          <Button
            size="small"
            variant="outlined"
            onClick={handleAddToCart}
            sx={{ width: 100 }}
          >
            <AddShoppingCartIcon />
          </Button>
        </Tooltip>
      ) : (
        <QuantityInput
          value={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          isMaxValue={quantity === productQuantity}
        />
      )}
    </CardActions>
  );
};
