import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

export const StyledGrid = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#fff",
  fontSize: "0.875em"
});

export const StyledTypography = styled(Typography)({
  padding: "0 1.546875em 0 0.5rem"
});

export const StyledTranslateIcon = styled(TranslateIcon)({
  width: "0.875em"
});