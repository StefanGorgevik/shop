import { ThemeProvider, createTheme } from "@mui/material";
import { Shop } from "./pages/Shop/Shop";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import MenuAppBar from "./components/layout/Header/header";
import { Register } from "./pages/Auth/Register";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { CartPage } from "./pages/CartPage/CartPage";
import ScrollToTop from "./components/utils/ScrollToTop";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00203FFF",
    },
    secondary: {
      main: "#ADEFD1FF",
    },
  },
  typography: {
    fontFamily: `"Afacad", "sans-serif"`,
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MenuAppBar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/welcome" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
