import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { StyledTypography, StyledTranslateIcon } from './UserProfile.styles';
import { StyledGrid } from "./UserProfile.styles";

export const UserProfile = () => {
  return (
    <StyledGrid>
      {/* if user have icon -> display his avatar, othervise fake icon */}
      <AccountCircleIcon />
      <StyledTypography>Murashko Ilya</StyledTypography>
      <StyledTranslateIcon />
    </StyledGrid>
  );
};
