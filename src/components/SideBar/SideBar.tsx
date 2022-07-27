import {
  StyledStack,
  StyledDiv,
  StyledNavLink,
  NavLinkTypography,
} from "./SideBar.styles";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";

export const SideBar = () => {
  return (
    <StyledDiv>
      <StyledStack>
        <StyledNavLink to="/employees">
          {({ isActive }) => (
            <>
              <EmojiPeopleIcon
                sx={{ width: "0.6em", paddingRight: "0.35em" }}
              />
              <NavLinkTypography isActive={isActive}>
                Employees
              </NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to="/projects">
          {({ isActive }) => (
            <>
              <DnsIcon sx={{ width: "0.6em", paddingRight: "0.35em" }} />
              <NavLinkTypography isActive={isActive}>
                Projects
              </NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to="/cvs">
          {({ isActive }) => (
            <>
              <AutoStoriesIcon
                sx={{ width: "0.6em", paddingRight: "0.35em" }}
              />
              <NavLinkTypography isActive={isActive}>Cvs</NavLinkTypography>
            </>
          )}
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink to="/entities">
          {({ isActive }) => (
            <>
              <FolderIcon sx={{ width: "0.6em", paddingRight: "0.35em" }} />
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
