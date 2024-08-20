import React from "react";
import { ThemeProvider } from "@mui/material";
import { getTheme } from "./theme";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";

export interface MUIThemeProviderProps extends Partial<ThemeProviderProps> {}

export interface ThemeContextProps {
  mode: string;
  handleThemeToggle: (theme: string) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: localStorage.getItem("theme") || "light",
  handleThemeToggle: () => {},
});

const MUIThemeProvider: React.FC<MUIThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "light"
  );

  React.useEffect(() => {
    let body = document.querySelector("body");
    if (body) {
      mode === "dark"
        ? (body.style.backgroundColor = "black")
        : (body.style.backgroundColor = "#fafcff");
    }
  }, [mode]);

  const handleThemeToggle = (mode: string) => {
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("theme", "light");
      setMode("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, handleThemeToggle }}>
      <ThemeProvider theme={getTheme(mode as "light" | "dark")}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MUIThemeProvider;
