import { StyledHeader, Img, StyledGrid } from "./Header.styles";
import { UserProfile } from "./components/UserProfile";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
      <StyledHeader>
        <StyledGrid>
          <Img src={logo} alt="logo" />
          <UserProfile />
        </StyledGrid>
      </StyledHeader>
  )
};
