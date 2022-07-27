import { styled, Box, Grid } from "@mui/material";

export const StyledHeader = styled(Box)({
  backgroundColor: "#001529",
  height: "3em",
});

export const Img = styled("img")({
  width: "7em",
  minHeight: "3em",
});

export const StyledGrid = styled(Grid)({
  padding: "0 1em",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
