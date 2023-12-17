import { Button, Container, Grid } from "@mui/material";
import { FC } from "react";
import { useCart } from "../../context/CartContext";
import { CartCard } from "../../components/cards/CartCard/CartCard";
import { NoContentFound } from "../../components/ui/NoContentFound";

export const CartPage: FC = (props) => {
  const {
    state: { cart },
    emptyCart,
    removeFromCart,
  } = useCart();

  if (cart.length === 0) {
    return <NoContentFound>You have no cart items.</NoContentFound>;
  }

  return (
    <Container>
      <Grid
        container
        sx={{
          gap: 2,
          height: 500,
          overflowY: "auto",
          justifyContent: "center",
        }}
      >
        {cart &&
          cart.map((id) => (
            <CartCard key={id} id={id} removeFromCart={removeFromCart} />
          ))}
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 2,
          paddingRight: 10,
          marginTop: 2,
        }}
      >
        <Grid item>
          <Button variant="outlined" sx={{ width: 200 }} onClick={emptyCart}>
            Clear cart
          </Button>
        </Grid>

        <Grid item>
          <Button variant="contained" sx={{ width: 200 }}>
            Order
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
