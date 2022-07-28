import { StyledDiv, StyledNavLink, NavLinkTypography } from "./SideBar.styles";
import { ROUTE } from "../../route/route";

import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export const SideBar = () => {
  return (
    <StyledDiv>
      <StyledNavLink to={ROUTE.EMPLOYEES}>
        <EmojiPeopleIcon />
        <NavLinkTypography>Employees</NavLinkTypography>
      </StyledNavLink>
      <StyledNavLink to={ROUTE.PROJECTS}>
        <DnsIcon />
        <NavLinkTypography>Projects</NavLinkTypography>
      </StyledNavLink>
      <StyledNavLink to={ROUTE.CVS}>
        <AutoStoriesIcon />
        <NavLinkTypography>Cvs</NavLinkTypography>
      </StyledNavLink>
      <StyledNavLink to={ROUTE.ENTITIES}>
        <FolderIcon />
        <NavLinkTypography>Entities</NavLinkTypography>
      </StyledNavLink>
    </StyledDiv>
  );
};
