import { CircularProgress, Container } from "@mui/material";
import { FC } from "react";

export const PageLoader: FC = () => (
  <Container sx={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
    <CircularProgress />
  </Container>
);
