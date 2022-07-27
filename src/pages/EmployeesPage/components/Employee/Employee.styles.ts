import { Grid, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledWrapperGrid = styled(Grid)({
  borderBottom: "1px solid",
  padding: "0.5em",
  "& svg:hover": {
    cursor: "pointer",
    color: "red"
  },
  "& > div": {
    padding: "0 0.5em"
  }
});

export const StyledGrid = styled(Grid)({
  textAlign: "end"
});

export const StyledLink = styled(Link)({
  color: "#000"
});
