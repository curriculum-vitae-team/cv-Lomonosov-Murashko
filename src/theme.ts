import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "16px",
        },
        a: {
          textDecoration: "none",
        },
      },
    },
  },
});
