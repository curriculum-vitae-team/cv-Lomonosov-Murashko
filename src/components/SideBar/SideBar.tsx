import {
  StyledStack,
  StyledDiv,
  StyledNavLink,
  NavLinkTypography,
} from "./SideBar.styles";
import { ROUTE } from "../../route/route";

import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export const SideBar = () => {
  return (
    <StyledDiv>
      <StyledStack>
        <StyledNavLink to={ROUTE.EMPLOYEES}>
          <EmojiPeopleIcon />
          <NavLinkTypography>Employees</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.PROJECTS}>
          <DnsIcon />
          <NavLinkTypography>Projects</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.CVS}>
          <AutoStoriesIcon />
          <NavLinkTypography>Cvs</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to={ROUTE.ENTITIES}>
          <FolderIcon />
          <NavLinkTypography>Entities</NavLinkTypography>
        </StyledNavLink>
      </StyledStack>
    </StyledDiv>
  );
};
