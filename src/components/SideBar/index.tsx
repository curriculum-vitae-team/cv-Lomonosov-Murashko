import { Typography } from "@mui/material";
import {
  StyledStack,
  StyledWrapperStack,
  StyledNavLink,
} from "./SideBar.styles";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";

export const SideBar = () => {
  const handleNavLinkCLick = (isActive: boolean) => {
    return isActive ? { color: "#1890FF" } : { color: "#000" };
  };

  return (
    <StyledWrapperStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }) => handleNavLinkCLick(isActive)}
          to="/employees"
        >
          <EmojiPeopleIcon sx={{ width: "0.6em", paddingRight: "0.35em" }} />
          <Typography>Employees</Typography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }: any) => handleNavLinkCLick(isActive)}
          to="/projects"
        >
          <DnsIcon sx={{ width: "0.6em", paddingRight: "0.35em" }} />
          <Typography>Projects</Typography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }: any) => handleNavLinkCLick(isActive)}
          to="/cvs"
        >
          <AutoStoriesIcon sx={{ width: "0.6em", paddingRight: "0.35em" }} />
          <Typography>Cvs</Typography>
        </StyledNavLink>
      </StyledStack>
      <StyledStack>
        <StyledNavLink
          style={({ isActive }: any) => handleNavLinkCLick(isActive)}
          to="/entities"
        >
          <FolderIcon sx={{ width: "0.6em", paddingRight: "0.35em" }} />
          <Typography>Entities</Typography>
        </StyledNavLink>
      </StyledStack>
    </StyledWrapperStack>
  );
};
