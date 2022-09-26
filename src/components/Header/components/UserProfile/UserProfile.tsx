import { useState } from "react";
import { StyledTypography, StyledGrid, StyledBox } from "./UserProfile.styles";
import { UserProfileCardWithOverlay } from "../UserProfileCard";
import { observer } from "mobx-react-lite";
import { authStore } from "@src/stores/AuthStore/AuthStore";
import { LanguageSelect } from "../LanguageSelect";
import { Avatar } from "../Avatar";

const UserProfile = () => {
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
        <Avatar url={user$?.profile.avatar || ""} />
        <StyledTypography sx={{ marginLeft: "0.5em" }}>
          {user$?.profile?.full_name || user$?.email}
        </StyledTypography>
      </StyledBox>
      <LanguageSelect />
      {isProfileOpen && (
        <UserProfileCardWithOverlay onClose={handleProfileCardClose} />
      )}
    </StyledGrid>
  );
};

export default observer(UserProfile);
