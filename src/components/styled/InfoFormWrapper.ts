import { styled } from "@mui/system";

export const InfoFormWrapper = styled("div")({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "2em 1em",
  "& .textfield-wrapper": {
    marginBottom: "0.5em",
    padding: "0.25em 3em 0 0",
  },
});
