import { AuthContext } from "@context/authContext/authContext";
import { withOverlay } from "@hoc/withOverlay";
import { Typography } from "@mui/material";
import { useContext } from "react";
import {
  StyledTypographyEmail,
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
      <Typography>{user?.profile?.full_name}</Typography>
      <StyledTypographyEmail>{user?.email}</StyledTypographyEmail>
      <StyledButton onClick={handleSignOutClick}>Sign Out</StyledButton>
    </StyledDiv>
  );
}

export const UserProfileCardWithOverlay = withOverlay(UserProfileCard);
