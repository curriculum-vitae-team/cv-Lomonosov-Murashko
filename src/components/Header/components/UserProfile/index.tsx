import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  StyledTypography,
  StyledTranslateIcon,
  StyledGrid,
  StyledBox,
} from "./UserProfile.styles";
import { UserProfileCard } from "../UserProfileCard";

export const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  return (
    <StyledGrid>
      {/* if user have icon -> display his avatar, othervise fake icon */}
      <StyledBox onClick={() => setIsProfileOpen(true)}>
        <AccountCircleIcon />
        <StyledTypography>Murashko Ilya</StyledTypography>
      </StyledBox>
      <StyledTranslateIcon />
      {isProfileOpen && <UserProfileCard setIsProfileOpen={setIsProfileOpen} />}
    </StyledGrid>
  );
};
