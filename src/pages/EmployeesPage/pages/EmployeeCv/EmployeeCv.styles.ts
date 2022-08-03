import { styled } from "@mui/material";

export const WrapperDiv = styled("div")({
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
  "& div.active > div > a": {
    color: "#1890FF",
    borderBottom: "2px solid #1890FF",
    padding: "0 0.5em 0.5em 0.5em",
  },
});
