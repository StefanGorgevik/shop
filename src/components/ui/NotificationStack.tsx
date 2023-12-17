import { styled } from "@mui/material";
import { SnackbarProvider, MaterialDesignContent } from "notistack";
import React, { FC, ReactNode } from "react";

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  "&.notistack-MuiContent-success": {
    backgroundColor: "#00203FFF",
  },
  "&.notistack-MuiContent-error": {
    backgroundColor: "#970C0C",
  },
}));
export const NotificationStackProvider: FC<{ children: ReactNode }> = ({
  children,
}) => (
  <SnackbarProvider
    maxSnack={3}
    Components={{
      success: StyledMaterialDesignContent,
      error: StyledMaterialDesignContent,
    }}
  >
    {children}
  </SnackbarProvider>
);
