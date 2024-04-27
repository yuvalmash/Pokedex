import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#31363F",
    },
  },
  typography: {
    fontFamily: "'pokemonFont', sans-serif",
  },
});

darkTheme = responsiveFontSizes(darkTheme);

let lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#d81b60",
    },
    background: {
      default: "#fcf9f6",
    },
  },
  typography: {
    fontFamily: "'pokemonFont', sans-serif",
  },
});

lightTheme = responsiveFontSizes(lightTheme);

export { darkTheme, lightTheme };
