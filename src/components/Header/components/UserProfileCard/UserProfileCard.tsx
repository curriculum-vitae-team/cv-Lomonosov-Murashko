import {
  StyledTypography,
  StyledButton,
  StyledOverlayDiv,
  StyledDiv,
  StyledAccountCircleIcon,
} from "./UserProfileCard.styles";
import { UserProfileCardProps } from "./UserProfileCard.types";

export function UserProfileCard({ onClose }: UserProfileCardProps) {
  const handleSignOutClick = () => {
    // log out
  };

  const onUserProfileCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledOverlayDiv onClick={onClose}>
      <StyledDiv onClick={onUserProfileCardClick} sx={{}}>
        <StyledAccountCircleIcon />
        <StyledTypography>Murashko Ilya</StyledTypography>
        <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
      </StyledDiv>
    </StyledOverlayDiv>
  );
}
