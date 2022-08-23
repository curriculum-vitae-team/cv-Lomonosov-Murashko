import { withOverlay } from "@hoc/withOverlay";
import { useNavigate } from "react-router";
import {
  StyledTypography,
  StyledButton,
  StyledDiv,
  StyledAccountCircleIcon,
} from "./UserProfileCard.styles";

function UserProfileCard() {
  const navigate = useNavigate();
  const handleSignOutClick = () => {
    navigate("/signin");
  };

  const onUserProfileCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledDiv onClick={onUserProfileCardClick}>
      <StyledAccountCircleIcon />
      <StyledTypography>Murashko Ilya</StyledTypography>
      <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
    </StyledDiv>
  );
}

export const UserProfileCardWithOverlay = withOverlay(UserProfileCard);
