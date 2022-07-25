import { StyledStack } from "./Footer.styles";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <StyledStack justifyContent="center" alignItems="center" component="footer">
      <Typography>CV Builder</Typography>
    </StyledStack>
  );
};
