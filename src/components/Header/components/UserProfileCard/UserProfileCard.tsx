import { ROUTE } from "@constants/route";
import { AuthContext } from "@context/authContext/authContext";
import { withOverlay } from "@hoc/withOverlay";
import { useContext } from "react";
import { useNavigate } from "react-router";
import {
  StyledTypography,
  StyledButton,
  StyledDiv,
  StyledAccountCircleIcon,
} from "./UserProfileCard.styles";

function UserProfileCard() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);
  const handleSignOutClick = () => {
    logout();
    navigate(ROUTE.SIGN_IN);
  };

  const onUserProfileCardClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <StyledDiv onClick={onUserProfileCardClick}>
      <StyledAccountCircleIcon />
      <StyledTypography>{user.email}</StyledTypography>
      <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
    </StyledDiv>
  );
}

export const UserProfileCardWithOverlay = withOverlay(UserProfileCard);
