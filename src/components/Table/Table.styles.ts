import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const StyledGrid = styled(Grid)({
  zIndex: "1",
  justifyContent: "flex-end",
  "& svg": {
    fontSize: "1em",
    transition: "transform 0.4s ease-in",
  },
  "& svg:hover": {
    cursor: "pointer",
  },
  "& > div": {
    padding: "0 0.5em",
    fontSize: "0.8rem",
    textAlign: "left",
  },
  "& svg.active": {
    transform: "rotate(-180deg)",
  },
  "& button.addEmployee": {
    backgroundColor: "#1890FF",
    border: "none",
    margin: "1rem 1rem 0 0",
    padding: "0.7em",
    borderRadius: "2px",
    color: "#fff",
    cursor: "pointer",
    textAlign: "right",
  },
  "& div.MuiAccordionSummary-gutters": {
    padding: "0 0 0 0.5rem",
  },
  "& div.css-15v22id-MuiAccordionDetails-root": {
    display: "flex",
    justifyContent: "flex-end",
    padding: "0 0 0.5em 0",
    "& a, button": {
      color: "#1890FF",
    },
  },
});

export const StyledDiv = styled("div")({
  height: "100%",
  borderLeft: "20px solid #f9f9f9",
  borderTop: "24px solid #f9f9f9",
  borderRight: "20px solid #f9f9f9",
  borderRadius: "5px",
  marginBottom: "1rem"
});
