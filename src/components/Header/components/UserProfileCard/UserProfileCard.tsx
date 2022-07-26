import {
  StyledTypography,
  StyledButton,
  StyledOverlayDiv,
  StyledDiv
} from "./UserProfileCard.styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserProfileCardProps } from "./UserProfileCard.types";

export const UserProfileCard = ({ onClose }: UserProfileCardProps) => {
  const handleSignOutClick = () => {
    // log out
  };

  const onUserProfileCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledOverlayDiv onClick={onClose}>
      <StyledDiv onClick={onUserProfileCardClick} sx={{  }}>
        <AccountCircleIcon sx={{ width: "3em", height: "3em" }} />
        <StyledTypography>Murashko Ilya</StyledTypography>
        <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
      </StyledDiv>
    </StyledOverlayDiv>
  );
};
