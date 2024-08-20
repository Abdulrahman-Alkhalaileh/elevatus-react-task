import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "dark" | "light") => {
const theme = createTheme({
  palette: {
    mode:mode,
    primary: {
      main: mode === 'light'?"#0052cc":"#00226b",
    },
    secondary: {
      main: mode === 'light' ?"#edf2ff":"#2e323d",
    },
  },
  breakpoints:{
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
  },
  typography: {
    fontFamily: "inherit",
    h1: {
      // 40px
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      // 32px
      fontSize: "2rem",
      fontWeight: 700,
      fontFamily: '"Pragati Narrow", sans-serif',
      textTransform: "capitalize",
    },
    h3: {},
    h4: {},
    h5: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h6: {},
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
return theme
}

export default getTheme;
