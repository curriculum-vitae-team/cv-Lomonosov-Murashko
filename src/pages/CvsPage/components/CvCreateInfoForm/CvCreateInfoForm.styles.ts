import { styled, TextField } from "@mui/material";

export const FormContolLabelWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginRight: "2em",
});

export const FormContolSelectLabelWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SelectTextField = styled(TextField)({
  minWidth: "12rem",
  marginTop: "-1.5em",
});
