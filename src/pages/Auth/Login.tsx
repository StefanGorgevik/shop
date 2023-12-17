import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../queries/auth/useLogin";
import { useAuth } from "../../context/AuthContext";

export const Login: FC = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();
  const login = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login.mutateAsync({ username, password }).then(() => setIsLoggedIn(true));
    navigate("/shop");
  };
  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container flexDirection="column" rowGap={2} alignItems="center">
        <Typography
          variant="h4"
          textAlign="center"
          style={{ marginBottom: 10 }}
          color="primary"
        >
          Welcome back
        </Typography>
        <Grid item>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ width: 300 }}
            onClick={handleLogin}
            disabled={!username || !password}
          >
            Login
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">OR</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{ width: 300 }}
            onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
