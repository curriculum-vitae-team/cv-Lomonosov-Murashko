import { styled } from "@mui/material";

export const StyledDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "75vw",
  height: "70vh",
  backgroundColor: "transparent",
  "& div": {},
  "@media(max-width: 950px)": {
    "&": {
      // flexDirection: "column",
    }
  },
});

export const StyledPattern = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Img = styled("img")({
  width: "100%",
  height: "100%",
});
