import { styled } from "@mui/material";

export const StyledDiv = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  padding: "1.25rem",
  "& > div": {
    padding: "0 0.5rem",
    cursor: "pointer",
  },
  "& > div:not(.link)": {
    color: "#1890FF",
    cursor: "default",
  },
});
