import { useContext, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  StyledTypography,
  StyledGrid,
  StyledBox,
  StyledTranslateIcon,
} from "./UserProfile.styles";
import { UserProfileCardWithOverlay } from "../UserProfileCard";
import { AuthContext } from "@context/authContext/authContext";

export function UserProfile() {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

  const handleProfileCardClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileCardOpen = () => {
    setIsProfileOpen(true);
  };

  return (
    <StyledGrid>
      <StyledBox onClick={handleProfileCardOpen}>
        <AccountCircleIcon />
        <StyledTypography>{user.email}</StyledTypography>
      </StyledBox>
      <StyledTranslateIcon />
      {isProfileOpen && (
        <UserProfileCardWithOverlay onClose={handleProfileCardClose} />
      )}
    </StyledGrid>
  );
}
