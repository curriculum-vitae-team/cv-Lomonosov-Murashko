import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const StyledStack = styled(Stack)({
  position: "absolute",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  top: "4em",
  right: "1.5em",
  width: "15em",
  height: "15em",
  color: "#000",
  borderRadius: "10px",
  background: "#fff",
  boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
}) as typeof Stack;

export const StyledTypography = styled(Typography)({
  marginBottom: "3em",
}) as typeof Typography;

export const StyledButton = styled(Button)({
  width: "60%",
}) as typeof Button;

export const StyledBox = styled(Box)({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
}) as typeof Box;
