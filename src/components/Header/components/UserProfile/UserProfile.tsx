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

export const UserProfileContext = createContext<
  { user: null } | GetAccountInfoResult
>({ user: null });

const UserProfile = () => {
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const { user$ } = authStore;

  const { data: accountInfoData, loading } = useQuery<GetAccountInfoResult>(
    GET_ACCOUNT_INFO,
    {
      variables: { id: user$?.id },
    },
  );

  const handleProfileCardClose = () => {
    setIsProfileOpen(false);
  };

  const handleProfileCardOpen = () => {
    setIsProfileOpen(true);
  };

  return (
    <UserProfileContext.Provider
      value={{ user: accountInfoData ? accountInfoData.user : null }}
    >
      <StyledGrid>
        <StyledBox onClick={handleProfileCardOpen}>
          {
            <Avatar
              src={accountInfoData?.user.profile.avatar}
              alt={accountInfoData?.user.profile.full_name}
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
