import { styled } from "@mui/material";

export const StyledFieldsetWrapper = styled("fieldset")({
  marginBottom: "0.5em",
  padding: "0.25em 3em 0 0",
  display: "flex",
  flexFlow: "column",
  border: "none",
  "& .MuiFormLabel-asterisk": {
    color: "#d32f2f",
  },
});
