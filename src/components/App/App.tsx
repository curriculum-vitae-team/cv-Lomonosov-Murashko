import { Router } from "../Router";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { theme } from "../../theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  );
};
