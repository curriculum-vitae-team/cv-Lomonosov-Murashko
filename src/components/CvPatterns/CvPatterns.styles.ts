import { styled } from "@mui/material";

export const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "60vw",
  height: "60vh",
  backgroundColor: "#fff",
  "& div": {
    margin: "1em",
    padding: "1em 0",
  },
});

export const StyledPattern = styled("div")({
  width: "100%",
  height: "100%",
});
