import React from "react";
import { StyledHeader, Img, StyledGrid } from "./Header.styles";
import UserProfile from "./components/UserProfile";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
      <StyledHeader>
        <StyledGrid>
          <Img src={logo} alt="logo" />
          <UserProfile />
        </StyledGrid>
      </StyledHeader>
  )
}

export default Header;
