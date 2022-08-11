import { useNavigate } from "react-router";
import {
  StyledTypography,
  StyledButton,
  StyledOverlayDiv,
  StyledDiv,
  StyledAccountCircleIcon,
} from "./UserProfileCard.styles";
import { UserProfileCardProps } from "./UserProfileCard.types";

export function UserProfileCard({ onClose }: UserProfileCardProps) {
  const navigate = useNavigate();
  const handleSignOutClick = () => {
    navigate("/signin");
  };

  const onUserProfileCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledOverlayDiv onClick={onClose}>
      <StyledDiv onClick={onUserProfileCardClick}>
        <StyledAccountCircleIcon />
        <StyledTypography>Murashko Ilya</StyledTypography>
        <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
      </StyledDiv>
    </StyledOverlayDiv>
  );
}
