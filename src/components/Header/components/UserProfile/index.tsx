import TranslateIcon from "@mui/icons-material/Translate";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from "@mui/material";
import { StyledGrid } from "./UserProfile.styles";

export const UserProfile = () => {
  return (
    <StyledGrid>
      {/* if user have icon -> display his avatar, othervise fake icon */}
      <AccountCircleIcon />
      <Typography sx={{ padding: "0 1.546875em 0 0.5rem", }}>Murashko Ilya</Typography>
      <TranslateIcon sx={{ width: "0.875em" }} />
    </StyledGrid>
  );
};
