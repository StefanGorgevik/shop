import { Box, Typography } from "@mui/material";
import { FC } from "react";

export const NoContentFound: FC<{ children: string }> = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: 300,
      marginTop: 10,
    }}
  >
    <Typography color="primary" variant="overline">
      {children}
    </Typography>
  </Box>
);
