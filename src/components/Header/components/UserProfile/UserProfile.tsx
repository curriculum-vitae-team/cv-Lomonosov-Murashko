import { createContext, useState } from "react";
import { StyledTypography, StyledGrid, StyledBox } from "./UserProfile.styles";
import { UserProfileCardWithOverlay } from "../UserProfileCard";
import { observer } from "mobx-react-lite";
import { authStore } from "@src/stores/AuthStore/AuthStore";
import { LanguageSelect } from "../LanguageSelect";
import { useQuery } from "@apollo/client";
import { GET_ACCOUNT_INFO } from "@src/graphql/User/User.queries";

import { GetAccountInfoResult } from "@src/graphql/User/User.interface";
import { Avatar } from "@mui/material";
import { UserProfileContextType } from "./UserProfile.types";

export const UserProfileContext = createContext<UserProfileContextType>({
  user: null,
} as UserProfileContextType);

const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const { user$ } = authStore;

  const [user, setUser] = useState<GetAccountInfoResult["user"] | null>(null);

  const { data: accountInfoData, loading } = useQuery<GetAccountInfoResult>(
    GET_ACCOUNT_INFO,
    {
      variables: { id: user$?.id },
      onCompleted: (data) => {
        setUser(data.user);
      },
    },
  );

  const handleProfileCardClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileCardOpen = () => {
    setIsProfileOpen(true);
  };

  const handleProfileUpdate = (
    field: "full_name" | "avatar" | "id",
    value: string,
  ) => {
    if (user) {
      setUser({ ...user, profile: { ...user.profile, [field]: value } });
    }
  };

  return (
    <UserProfileContext.Provider
      value={{ user, updateProfile: handleProfileUpdate }}
    >
      <StyledGrid>
        <StyledBox onClick={handleProfileCardOpen}>
          {
            <Avatar
              src={user?.profile.avatar}
              alt={user?.profile.full_name}
              sx={{
                width: "1.6rem",
                height: "1.6rem",
              }}
            />
          }
          <StyledTypography sx={{ marginLeft: "0.5em" }}>
            {user$?.profile?.full_name || user$?.email}
          </StyledTypography>
        </StyledBox>
        <LanguageSelect />
        {isProfileOpen && (
          <UserProfileCardWithOverlay onClose={handleProfileCardClose} />
        )}
      </StyledGrid>
    </UserProfileContext.Provider>
  );
};

export default observer(UserProfile);
