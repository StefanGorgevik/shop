import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useCart } from "../../context/CartContext";
import { CartCard } from "../../components/cards/CartCard/CartCard";
import { NoContentFound } from "../../components/ui/NoContentFound";
import { useNavigate } from "react-router-dom";

export const CartPage: FC = () => {
  const {
    state: { cart },
    emptyCart,
  } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <NoContentFound>
        <Box sx={{ display: "flex", flexDirection: "column", marginTop: 25 }}>
          <Typography color="primary" variant="overline">
            You have no cart items. Please add some.
          </Typography>

          <Button
            variant="contained"
            style={{ width: 300 }}
            onClick={() => navigate("/shop")}
          >
            Browse
          </Button>
        </Box>
      </NoContentFound>
    );
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "90vh",
        justifyContent: "space-between",
        paddingBottom: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          height: "90%",
          overflowY: "auto",
        }}
      >
        {cart && cart.map((id) => <CartCard key={id} id={id} />)}
      </Box>

      <Grid
        item
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 2,
          paddingRight: 2,
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
