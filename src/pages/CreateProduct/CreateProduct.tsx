import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const CreateProduct: FC = () => {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: 200 }}>
      <Grid container flexDirection="column" rowGap={2} alignItems="center">
        <Typography
          variant="h4"
          textAlign="center"
          style={{ marginBottom: 10 }}
          color="primary"
        >
          Create a new product
        </Typography>
        <Grid item>
          <TextField
            id="name"
            label="Product name"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="brand"
            label="Product brand"
            variant="outlined"
            size="small"
            style={{ width: 300 }}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{ width: 300 }}
            onClick={() => navigate("/")}
          >
            Create
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
