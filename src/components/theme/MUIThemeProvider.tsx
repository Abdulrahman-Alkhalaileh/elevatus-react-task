import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

export interface MUIThemeProviderProps extends Partial<ThemeProviderProps> {}

const MUIThemeProvider: React.FC<MUIThemeProviderProps> = ({
  children,
  ...props
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MUIThemeProvider;
