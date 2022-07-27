import {
  StyledStack,
  StyledDiv,
  StyledNavLink,
  NavLinkTypography,
} from "./SideBar.styles";
import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import { ROUTE } from "../../route/route";

export const SideBar = () => {
  return (
    <StyledDiv>
      <StyledStack>
        <StyledNavLink to={ROUTE.EMPLOYEES}>
          {({ isActive }) => (
            <>
              <EmojiPeopleIcon />
              <NavLinkTypography isActive={isActive}>
                Employees
              </NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.PROJECTS}>
          {({ isActive }) => (
            <>
              <DnsIcon />
              <NavLinkTypography isActive={isActive}>
                Projects
              </NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.CVS}>
          {({ isActive }) => (
            <>
              <AutoStoriesIcon />
              <NavLinkTypography isActive={isActive}>Cvs</NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.ENTITIES}>
          {({ isActive }) => (
            <>
              <FolderIcon />
              <NavLinkTypography isActive={isActive}>
                Entities
              </NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
    </StyledDiv>
  );
};
