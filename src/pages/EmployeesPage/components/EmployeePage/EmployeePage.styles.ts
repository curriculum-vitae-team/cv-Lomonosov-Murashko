import { styled, Typography } from "@mui/material";

export const StyledWrapperDiv = styled("div")({
  flex: "1 1",
  borderLeft: "20px solid #f9f9f9",
  borderTop: "24px solid #f9f9f9",
  borderRight: "20px solid #f9f9f9",
  borderRadius: "5px",
  "& form": {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "space-between",
    "& .buttons": {
      position: "absolute",
      right: "0",
      bottom: "0",
      textAlign: "right",
      margin: "0.5rem 1.5rem",
      "& button": {
        backgroundColor: "#1890FF",
        color: "#fff",
        margin: "0 0.5em",
        textTransform: "none",
      },
    },
  },
});

export const StyledTypography = styled(Typography)({
  padding: "0.35rem 0.5rem 0.5rem 1rem",
  fontWeight: "bold",
});

export const WrapperDiv = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column"
});
