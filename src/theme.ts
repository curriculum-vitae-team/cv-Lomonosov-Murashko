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
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: "static",
          fontSize: "1rem",
          transformOrigin: "none",
          transform: "none",
          transition: "none",
          marginBottom: "10px",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& legend": {
            display: "none",
          },
        },
      },
    },
  },
});
