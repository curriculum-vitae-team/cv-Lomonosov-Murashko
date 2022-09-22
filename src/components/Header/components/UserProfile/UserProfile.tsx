import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  StyledTypography,
  StyledGrid,
  StyledBox,
  StyledTranslateIcon,
} from "./UserProfile.styles";
import { UserProfileCardWithOverlay } from "../UserProfileCard";
import { observer } from "mobx-react-lite";
import { authStore } from "@src/stores/AuthStore/AuthStore";

export const UserProfile = observer(() => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const { user$ } = authStore;

  const handleProfileCardClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileCardOpen = () => {
    setIsProfileOpen(true);
  };

  return (
    <StyledGrid>
      <StyledBox onClick={handleProfileCardOpen}>
        <AccountCircleIcon sx={{ marginRight: "0.5em" }} />
        <StyledTypography>
          {user$?.profile?.full_name || user$?.email}
        </StyledTypography>
      </StyledBox>
      <StyledTranslateIcon />
      {isProfileOpen && (
        <UserProfileCardWithOverlay onClose={handleProfileCardClose} />
      )}
    </StyledGrid>
  );
});
