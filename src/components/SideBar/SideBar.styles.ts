import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)({
  minWidth: "13em",
  zIndex: "1",
  minHeight: "calc(100vh - 6em)",
  paddingTop: "1em",
  background: "#fff",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  "@media(max-width: 1036px)": {
    "&": {
      minWidth: "10em",
    },
  },
});
