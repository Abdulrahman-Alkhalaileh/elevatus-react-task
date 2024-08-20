import React from "react";
import { Box, BoxProps } from "@mui/material";
import Logo from "./Logo";
import ThemeSwitch from "./ThemeSwitch";

export interface HeaderProps extends BoxProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Box
      py={3}
      px={{xs:3,sm:3,md:8}}
      bgcolor="primary.main"
      display="flex"
      alignItems='center'
      justifyContent='space-between'
      gap={3}
      position="sticky"
      top={0}
      zIndex={1000}
      {...props}
    >
      <Logo />
      <ThemeSwitch/>
    </Box>
  );
};

export default Header;
