import { CssBaseline, ThemeProvider } from "@mui/material";
import { Router } from "../Router";
import { theme } from "../../theme";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { ErrorToastStore } from "@context/ErrorToastStore/ErrorToastStore";

export function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <ErrorToastStore>
          <CssBaseline />
          <Router />
        </ErrorToastStore>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
