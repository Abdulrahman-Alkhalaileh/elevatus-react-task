import { Box, BoxProps } from '@mui/material';
import React from 'react'

export interface FooterProps extends BoxProps{
  
}

const Footer: React.FC<FooterProps> = ({ ...props }) => {
  return (
    <Box height={100} bgcolor='secondary.main'>
      Footer
    </Box>
  )
}

export default Footer;