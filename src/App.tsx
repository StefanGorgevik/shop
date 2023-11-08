import { animated, useSpring } from "@react-spring/web";
import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { Shop } from "./pages/Shop/Shop";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Auth/Login";
import MenuAppBar from "./components/layout/Header/header";
import { Register } from "./pages/Auth/Register";
import { CreateProduct } from "./pages/CreateProduct/CreateProduct";

// const style = {
//   // background: "linear-gradient(135deg, whitesmoke, #e0e0e0)",
//   padding: "10px",
//   width: "100%",
//   height: "100px",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// };

const theme = createTheme({
  palette: {
    primary: {
      main: "#00203FFF",
    },
    secondary: {
      main: "#ADEFD1FF",
    },
  },
});

const queryClient = new QueryClient();

const textStyle = {
  color: "black",
  fontSize: "50px",
};
function App() {
  const springProps = useSpring({
    opacity: 1,
    delay: 500,
    transform: "translateX(0)",
    from: {
      opacity: 0,
      transform: "translateX(100%)",
    },
  });
  const springProps4 = useSpring({
    opacity: 1,
    delay: 1200,
    from: {
      opacity: 0,
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <MenuAppBar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<CreateProduct />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );

  // return <ToDo />;
  <Container
    style={{
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingTop: "1rem",
    }}
  >
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <animated.div
        style={{
          ...textStyle,
          ...springProps,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography variant="h2" textAlign="center">
            Something
          </Typography>
          <Typography variant="h2" textAlign="center">
            That
          </Typography>
          <Typography variant="h2" textAlign="center">
            Will sell
          </Typography>
        </div>
      </animated.div>
    </div>

    <animated.div
      style={{
        ...textStyle,
        ...springProps4,
        height: "100%",
      }}
    >
      <Typography
        variant="body1"
        textAlign="center"
        maxWidth="90%"
        margin="0 auto"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </Typography>
    </animated.div>
    <div>
      <animated.div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10rem",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          style={{
            background: "#40444478",
            color: "whitesmoke",
            padding: "10px 25px",
            borderRadius: 10,
            height: 300,
            width: 300,
          }}
        >
          <Typography variant="h3" textAlign="center">
            Browse
          </Typography>
        </Box>
        <Box
          style={{
            background: "#40444478",
            color: "whitesmoke",
            padding: "10px 25px",
            borderRadius: 10,
            height: 300,
            width: 300,
          }}
        >
          <Typography variant="h3" textAlign="center">
            Login
          </Typography>
        </Box>
        <Box
          style={{
            background: "#40444478",
            color: "whitesmoke",
            padding: "10px 25px",
            borderRadius: 10,
            height: 300,
            width: 300,
          }}
        >
          <Typography variant="h3" textAlign="center">
            Register
          </Typography>
        </Box>
      </animated.div>
    </div>
  </Container>;
}

export default App;
