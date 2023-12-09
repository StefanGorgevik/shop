import React, { useMemo, FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WestIcon from "@mui/icons-material/West";

const MenuAppBar: FC = () => {
  const [auth] = React.useState(true);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const goBack = () => navigate(-1);
  const isHomePage = useMemo(() => pathname === "/", [pathname]);

  if (
    pathname === "/login" ||
    pathname === "/register" ||
    pathname === "/welcome"
  )
    return null;

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box>
            {isHomePage ? (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                onClick={() => navigate("/")}
              >
                Shop
              </Typography>
            ) : (
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={goBack}
                color="inherit"
              >
                <WestIcon />
              </IconButton>
            )}
          </Box>
          <Box>
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
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;
