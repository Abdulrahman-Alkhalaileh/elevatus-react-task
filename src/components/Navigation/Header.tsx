import React from "react";
import { Box, BoxProps } from "@mui/material";
import Logo from "./Logo";

export interface HeaderProps extends BoxProps {}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Box
      py={3}
      px={{xs:3,sm:3,md:8}}
      bgcolor="primary.main"
      display="flex"
      position="sticky"
      top={0}
      zIndex={1000}
      {...props}
    >
      <Logo />
    </Box>
  );
};

export default Header;
