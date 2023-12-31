import { useMemo, FC, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Button, Tooltip } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import WestIcon from "@mui/icons-material/West";
import { useAuth } from "../../../context/AuthContext";
import { LogoutOutlined } from "@mui/icons-material";
import LogoutModal from "../../logout-modal/LogoutModal";

const MenuAppBar: FC = () => {
  const { isLoggedIn } = useAuth();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const goBack = () => navigate(-1);
  const isHomePage = useMemo(() => pathname === "/shop", [pathname]);
  const isCartPage = useMemo(() => pathname === "/cart", [pathname]);

  const handleLogout = () => {
    setIsLoggingOut(true);
  };
  if (pathname === "/login" || pathname === "/register" || pathname === "/")
    return null;

  return (
    <>
      <Box sx={{ flexGrow: 1, marginBottom: 10 }}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {isHomePage ? (
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  onClick={() => navigate("/shop")}
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
              {isCartPage && (
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ flexGrow: 1 }}
                  onClick={() => navigate("/shop")}
                >
                  Your cart
                </Typography>
              )}
            </Box>
            <Box>
              {isLoggedIn ? (
                <>
                  <Tooltip title="Create a new product" placement="bottom">
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
                  </Tooltip>

                  <Tooltip title="Cart" placement="bottom">
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
                  </Tooltip>
                  <Tooltip title="Logout" placement="bottom">
                    <IconButton
                      size="large"
                      aria-label="logout"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleLogout}
                      color="inherit"
                    >
                      <LogoutOutlined />
                    </IconButton>
                  </Tooltip>
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
      {isLoggingOut && (
        <LogoutModal
          isLoggingOut={isLoggingOut}
          onClose={() => setIsLoggingOut(false)}
        />
      )}
    </>
  );
};

export default MenuAppBar;
