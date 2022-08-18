import { keyframes, styled } from "@mui/material";

const spin = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

export const StyledLoader = styled("div")({
  borderRadius: "100%",
  border: "3px solid #808080",
  borderTop: "3px solid #62b2ff",
  width: "40px",
  height: "40px",
  animation: `${spin} 2s linear infinite`,
});

export const StyledLoaderWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: "100%",
});
