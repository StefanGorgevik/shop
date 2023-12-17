import { Box } from "@mui/material";
import { FC, ReactNode } from "react";

export const NoContentFound: FC<{ children: ReactNode }> = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: 300,
      marginTop: 10,
    }}
  >
    {children}
  </Box>
);
