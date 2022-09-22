import { withOverlay } from "@hoc/withOverlay";
import { Typography } from "@mui/material";
import { ROUTE } from "@constants/route";
import { useNavigate } from "react-router";
import {
  StyledTypographyEmail,
  StyledButton,
  StyledDiv,
  StyledAccountCircleIcon,
} from "./UserProfileCard.styles";
import { authStore } from "@src/stores/AuthStore/AuthStore";

function UserProfileCard() {
  const { user$, logout } = authStore;

  const navigate = useNavigate();
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
      <Typography>{user$?.profile?.full_name}</Typography>
      <StyledTypographyEmail>{user$?.email}</StyledTypographyEmail>
      <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
    </StyledDiv>
  );
}

export const UserProfileCardWithOverlay = withOverlay(UserProfileCard);
