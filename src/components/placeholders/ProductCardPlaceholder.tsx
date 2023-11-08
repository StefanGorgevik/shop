import { Card, Grid, Skeleton } from "@mui/material";
import { FC } from "react";

export const ProductCardPlaceholder: FC = () => (
  <Grid item xs={2} sm={4} md={4} style={{ height: "100%" }}>
    <Card variant="elevation" raised style={{ height: "100%" }}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={40}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={200}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={40}
        style={{ marginTop: 6 }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={80}
        height={40}
        style={{
          marginBottom: 10,
          marginTop: 6,
          marginLeft: 10,
          borderRadius: 6,
        }}
      />
    </Card>
  </Grid>
);
