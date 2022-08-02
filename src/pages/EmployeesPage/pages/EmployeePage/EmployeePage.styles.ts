import { Stack, styled } from "@mui/material";

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

export const StyledStack = styled(Stack)({
  padding: "1.25rem",
  background: "#fff",
});

export const StyledDiv = styled("div")({
  margin: "24px",
  marginBottom: "0",
  width: "calc(100% - 48px)",
  height: "100%",
  background: "#fff",
  padding: "24px",
});
