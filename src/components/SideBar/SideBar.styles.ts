import { Paper, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledPaper = styled(Paper)({
  minWidth: "13em",
  zIndex: "1",
  height: "calc(100vh - 6em)",
  paddingTop: "1em",
  background: "#fff",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
  "@media(max-width: 1036px)": {
    "&": {
      minWidth: "10em",
    },
  },
});
