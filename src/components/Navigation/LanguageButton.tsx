import { Button, ButtonProps } from "@mui/material";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

export interface LanguageButtonProps extends ButtonProps {}

const LanguageButton: React.FC<LanguageButtonProps> = ({ ...props }) => {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    // Change direction based on the selected language
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const toggleLanguage = () => {
    const languages = ["ar", "en"];
    const selectedLanguage = i18n.language;
    i18n.changeLanguage(languages.find((lan) => lan !== selectedLanguage)); // Change the language
  };

  return (
    <>
      <Button onClick={() => toggleLanguage()} color="secondary" variant="contained" sx={{fontWeight:800,fontSize:15,py:0,borderRadius:5}}>
        {t("language")}
      </Button>
    </>
  );
};

export default LanguageButton;
