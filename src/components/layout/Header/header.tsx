import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("route", location.pathname);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {};

  if (location.pathname === "/login" || location.pathname === "/register")
    return null;

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
          {auth ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => navigate("/create")}
                color="inherit"
              >
                <AddCircleOutlineIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={() => navigate("/cart")}
                color="inherit"
              >
                <AddShoppingCartIcon />
              </IconButton>
            </>
          ) : (
            <Box style={{ display: "flex", gap: 10 }}>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/login")}
              >
                <Typography variant="subtitle1" color="primary">
                  Login
                </Typography>
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => navigate("/register")}
              >
                <Typography variant="subtitle1" color="primary">
                  Register
                </Typography>
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
