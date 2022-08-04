import { styled } from "@mui/material";

export const WrapperDiv = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  "& div.active > div > a": {
    color: "#1890FF",
    borderBottom: "2px solid #1890FF",
    padding: "0 0.5em 0.5em 0.5em",
  },
});

export const StyledButtonWrapper = styled("div")({
  position: "fixed",
  bottom: "3.5em",
  zIndex: "100",
  width: "",
  display: "flex",
  justifyContent: "flex-end",
  "& button": {
    backgroundColor: "#F0F0F0",
  },
});
