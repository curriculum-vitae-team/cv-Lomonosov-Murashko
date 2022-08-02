import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledDiv = styled("div")({
  width: "13.5rem",
  padding: "0.75em 0",
  "&.active": {
    borderBottom: "2px solid #1890FF",
    "& a": {
      color: "#1890FF",
    },
  },
});

export const StyledLink = styled(Link)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#000",
  padding: "0 0.5em",
});
