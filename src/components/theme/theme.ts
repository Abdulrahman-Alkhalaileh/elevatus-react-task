import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0052cc",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
  typography: {
    fontFamily: "inherit",
    h1: {
      // 40px
      fontSize: "2.5rem",
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
