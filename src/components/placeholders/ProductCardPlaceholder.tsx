import { Box, Card, Grid, Skeleton } from "@mui/material";
import { FC } from "react";

export const ProductCardPlaceholder: FC = () => (
  <Grid item xs={2} sm={4} md={4} style={{ height: "100%", minHeight: 400 }}>
    <Card variant="elevation" raised style={{ height: "100%", minHeight: 400 }}>
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={80}
        sx={{ marginBottom: 1 }}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width="100%"
        height={250}
        sx={{marginBottom: 2}}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: 1,
          marginRight: 1,
        }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={100}
          height={40}
          style={{
            marginBottom: 5,
            marginTop: 6,
            borderRadius: 6,
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={100}
          height={40}
          style={{
            marginBottom: 5,
            marginTop: 6,
            borderRadius: 6,
          }}
        />
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={100}
          height={40}
          style={{
            marginBottom: 5,
            marginTop: 6,
            borderRadius: 6,
          }}
        />
      </Box>
    </Card>
  </Grid>
);
