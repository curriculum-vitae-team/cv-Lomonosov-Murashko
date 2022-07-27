import { styled, Grid } from "@mui/material";
import { transform } from "typescript";


export const StyledDiv = styled('div')({
  width: "100%",
  padding: "1.5em 1em 0 1em"
});

export const StyledGrid = styled(Grid)({
  display: "flex",
  margin: "1em 0",
  padding: "1em",
  backgroundColor: "#cfe0e8",
  borderRadius: "5px",
  "& svg": {
    fontSize: "1em",
    margin: "0.25em 0 0 0.3em",
    transition: "transform 0.4s ease-in",
  },
  "& svg:hover": {
    cursor: "pointer",
  },
  "& > div": {
    padding: "0 0.5em"
  },
  "& svg.active": {
    transform: "rotate(-180deg)"
  }
});
