import { styled, Grid } from "@mui/material";

export const StyledDiv = styled("div")({
  width: "100%",
  fontSize: "13px",
});

export const StyledGrid = styled(Grid)({
  display: "flex",
  marginTop: "1em",
  padding: "1em",
  backgroundColor: "#f9f9f9",
  borderRadius: "5px",
  "& svg": {
    fontSize: "1em",
    margin: "0.5em 0 0 0.3em",
    transition: "transform 0.4s ease-in",
  },
  "& svg:hover": {
    cursor: "pointer",
  },
  "& > div": {
    padding: "0 0.5em",
  },
  "& svg.active": {
    transform: "rotate(-180deg)",
  },
});

export const StyledButton = styled("button")({
  backgroundColor: "#1890FF",
  color: "#fff",
  fontSize: "1em",
  margin: "1em",
  cursor: "pointer",
  border: "none",
  padding: "0.7em",
  borderRadius: "2px",
  float: "right",
});

export const DivContainer = styled("div")({
  marginLeft: "2px",
  borderTop: "1.25em solid #f9f9f9",
  borderRight: "1.5em solid #f9f9f9",
  borderLeft: "1.5em solid #f9f9f9",
  borderBottom: "1.25em solid #f9f9f9",
});
