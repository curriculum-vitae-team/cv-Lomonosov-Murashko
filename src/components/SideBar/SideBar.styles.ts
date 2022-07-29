import { styled, Stack, Typography, Paper } from "@mui/material";
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

export const StyledStack = styled(Stack)({
  flexDirection: "row",
  padding: "0.375em 0 0.365em 1em",
});

export const StyledNavLink = styled(NavLink)({
  display: "flex",
  color: "#000",
  "&.active": {
    color: "#1890FF",
  },
});

export const NavLinkTypography = styled(Typography)({
  paddingLeft: "0.5em",
});
