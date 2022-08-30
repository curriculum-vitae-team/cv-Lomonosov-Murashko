import { AuthContext } from "@context/authContext/authContext";
import { withOverlay } from "@hoc/withOverlay";
import { useContext } from "react";
import {
  StyledTypography,
  StyledButton,
  StyledDiv,
  StyledAccountCircleIcon,
} from "./UserProfileCard.styles";

function UserProfileCard() {
  const { user, logout } = useContext(AuthContext);
  const handleSignOutClick = () => {
    logout();
  };

  const onUserProfileCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledDiv onClick={onUserProfileCardClick}>
      <StyledAccountCircleIcon />
      <StyledTypography>{user?.email}</StyledTypography>
      <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
    </StyledDiv>
  );
}

export const UserProfileCardWithOverlay = withOverlay(UserProfileCard);
