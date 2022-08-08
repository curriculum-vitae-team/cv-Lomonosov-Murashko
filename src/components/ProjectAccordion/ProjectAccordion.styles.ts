import { Accordion, styled } from "@mui/material";

export const ProjectNameWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
});

export const StyledAccordion = styled(Accordion)({
  marginLeft: "1em",
  "& .MuiPaper-elevation": {
    marginRight: "1em",
  },
});
