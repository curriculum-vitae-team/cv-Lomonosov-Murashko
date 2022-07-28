import { styled } from "@mui/system";
import { Grid } from "@mui/material";

export const StyledDiv = styled("div")({
  width: "100%",
  marginTop: "1em",
  display: "flex",
  backgroundColor: "#f9f9f9",
});

export const StyledGrid = styled(Grid)({
  display: "flex",

  padding: "1em",
  borderRadius: "5px",
  "& svg": {
    fontSize: "1em",
    margin: "0.5em 0 0 0.3em",
    transition: "transform 0.4s ease-in",
  },
  "& svg:hover": {
    cursor: "pointer",
  },
  "& > div": {
    padding: "0 0.5em",
  },
  "& svg.active": {
    transform: "rotate(-180deg)",
  },
});
