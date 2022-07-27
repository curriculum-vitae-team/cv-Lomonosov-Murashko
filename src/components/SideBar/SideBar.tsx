import {
  StyledStack,
  StyledDiv,
  StyledNavLink,
  StyledTypography,
} from "./SideBar.styles";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import { ROUTE } from "../../route/route";

export const SideBar = () => {
  const handleNavLinkClick = (isActive: boolean) => {
    return isActive ? { color: "#1890FF" } : { color: "#000" };
  };

  return (
    <StyledDiv>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }) => handleNavLinkClick(isActive)}
          to={ROUTE.EMPLOYEES}
        >
          <EmojiPeopleIcon sx={{ width: "0.6em" }} />
          <StyledTypography>Employees</StyledTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }) => handleNavLinkClick(isActive)}
          to={ROUTE.PROJECTS}
        >
          <DnsIcon sx={{ width: "0.6em" }} />
          <StyledTypography>Projects</StyledTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }) => handleNavLinkClick(isActive)}
          to={ROUTE.CVS}
        >
          <AutoStoriesIcon />
          <StyledTypography>Cvs</StyledTypography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }) => handleNavLinkClick(isActive)}
          to={ROUTE.ENTITIES}
        >
          <FolderIcon sx={{ width: "0.6em" }} />
          <StyledTypography>Entities</StyledTypography>
        </StyledNavLink>
      </StyledStack>
    </StyledDiv>
  );
};
