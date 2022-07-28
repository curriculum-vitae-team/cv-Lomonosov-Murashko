import { Grid, styled } from "@mui/material";

export const StyledWrapperGrid = styled(Grid)({
  padding: "0.5em 1em",
  "& svg:hover": {
    cursor: "pointer",
    color: "red",
  },
  "& > div": {
    padding: "0 0.5em",
  },
});
