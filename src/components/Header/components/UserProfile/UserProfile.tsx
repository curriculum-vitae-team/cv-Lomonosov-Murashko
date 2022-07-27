import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  StyledTypography,
  StyledGrid,
  StyledBox,
  StyledTranslateIcon,
} from "./UserProfile.styles";
import { UserProfileCard } from "../UserProfileCard";

export const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const handleProfileCardClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileCardOpen = () => {
    setIsProfileOpen(true);
  };

  return (
    <StyledGrid>
      {/* if user have icon -> display his avatar, othervise fake icon */}
      <StyledBox onClick={handleProfileCardOpen}>
        <AccountCircleIcon />
        <StyledTypography>Murashko Ilya</StyledTypography>
      </StyledBox>
      <StyledTranslateIcon />
      {isProfileOpen && <UserProfileCard onClose={handleProfileCardClose} />}
    </StyledGrid>
  );
};
