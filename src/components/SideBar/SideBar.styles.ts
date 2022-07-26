import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledWrapperStack = styled(Stack)({
  minWidth: "13em",
  height: "calc(100vh - 6em)",
  paddingTop: "1em",
  background: "#fff",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
}) as typeof Stack;

export const StyledStack = styled(Stack)({
  flexDirection: "row",
  padding: "0.375em 0 0.365em 1em",
}) as typeof Stack;

export const StyledNavLink = styled(NavLink)({
  display: "flex",
});
