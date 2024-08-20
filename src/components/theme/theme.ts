import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
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

export default theme;
