import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontSize: "16px",
          background: "#F0F2F5",
        },
        a: {
          textDecoration: "none",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
  },
});
