import React from "react";
import { Box, BoxProps, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import { useTranslation } from "react-i18next";

export interface FooterProps extends BoxProps {}

const Footer: React.FC<FooterProps> = ({ ...props }) => {

  const {t} = useTranslation()

  return (
    <Box
      bgcolor="secondary.main"
      pt={5}
      px={{xs:1,md:5}}
      pb={1}
      display="flex"
      flexDirection="column"
      gap={2}
      {...props}
    >
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="body1" color="text.primary">
          {t('copyright')} <a href="https://www.elevatus.io/">Elevatus</a>{" "}
          &copy;
        </Typography>
        <Typography variant="body1" color="text.primary">
          {t("createdBy")}
        </Typography>
      </Box>
      <Box display="flex" gap={2} justifyContent={{xs:'center',md:'flex-end'}}>
        <a
          href="https://www.linkedin.com/in/abdulrahman-alkhalaileh/"
          target="__blank"
        >
          <LinkedInIcon
            sx={{ width: 32, height: 32, color: "text.secondary" }}
          />
        </a>
        <a href="https://github.com/Abdulrahman-Alkhalaileh" target="__blank">
          <GitHubIcon sx={{ width: 32, height: 32, color: "text.secondary" }} />
        </a>
        <a href="mailto:abdulrahman.alkhalaileh@gmail.com" target="__blank">
          <EmailIcon sx={{ width: 32, height: 32, color: "text.secondary" }} />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
