import { Button, CardActions, Tooltip } from "@mui/material";
import { FC, useState } from "react";
import "../ProductCard.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { QuantityInput } from "./QuantityInput";

export const ProductCardActions: FC<{
  productId: number;
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
}> = ({ productId, addToCart, removeFromCart }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    addToCart(productId);
    setQuantity(1);
  };

  const handleDecrease = () => {
    setQuantity((prevValue: number) => prevValue - 1);
    removeFromCart(productId);
  };
  const handleIncrease = () => {
    setQuantity((prevValue: number) => prevValue + 1);
  };

  return (
    <CardActions style={{ display: "flex", justifyContent: "flex-end" }}>
      <Tooltip title="See product">
        <Button
          size="small"
          variant="outlined"
          onClick={() => navigate(`/product/${productId}`)}
        >
          <VisibilityIcon />
        </Button>
      </Tooltip>
      <Tooltip title="Add to wishlist">
        <Button size="small" variant="outlined">
          <FavoriteBorderIcon />
        </Button>
      </Tooltip>
      {quantity < 1 ? (
        <Tooltip title="Add to cart">
          <Button size="small" variant="outlined" onClick={handleAdd}>
            <AddShoppingCartIcon />
          </Button>
        </Tooltip>
      ) : (
        <QuantityInput
          value={quantity}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
        />
      )}
    </CardActions>
  );
};
