import { styled, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const StyledDiv = styled("div")({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
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
});

export const StyledTypography = styled(Typography)({
  marginBottom: "3em",
});

export const StyledButton = styled(Button)({
  width: "60%",
});

export const StyledOverlayDiv = styled("div")({
  height: "100vh",
  width: "100vw",
  position: "fixed",
  zIndex: "2",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
});

export const StyledAccountCircleIcon = styled(AccountCircleIcon)({
  width: "3em",
  height: "3em",
});
