import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Register: FC = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container flexDirection="column" rowGap={2} alignItems="center">
        <Typography
          variant="h4"
          textAlign="center"
          color='primary'
          style={{ marginBottom: 10 }}
        >
          Create an account
        </Typography>
        <Grid item>
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="repeat-password"
            label="Repeat password"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ width: 300 }} onClick={() => navigate("/")}>
            Register
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1">ALREADY HAVE AN ACCOUNT?</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            style={{ width: 300 }}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
