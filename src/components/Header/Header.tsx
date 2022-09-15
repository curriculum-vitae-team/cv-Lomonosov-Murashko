import React, { useContext } from "react";
import {
  StyledHeader,
  Img,
  StyledGrid,
  StyledLabel,
  FlexWrapper,
} from "./Header.styles";
import { UserProfile } from "./components/UserProfile/UserProfile";
import logo from "@assets/images/logo.svg";
import { SidebarContext } from "@context/sidebarContext/sidebarContext";

export function Header() {
  const { handleMenuBurgerClick } = useContext(SidebarContext);

  return (
    <StyledHeader>
      <StyledGrid>
        <FlexWrapper>
          <StyledLabel htmlFor="check">
            <input onClick={handleMenuBurgerClick} type="checkbox" id="check" />
            <span></span>
            <span></span>
            <span></span>
          </StyledLabel>
          <Img src={logo} alt="logo" />
        </FlexWrapper>
        <UserProfile />
      </StyledGrid>
    </StyledHeader>
  );
}
