import { StyledDiv } from "./SideBar.styles";
import { ROUTE } from "../../route/route";

import DnsIcon from "@mui/icons-material/Dns";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import FolderIcon from "@mui/icons-material/Folder";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import React from "react";
import { ISideBarLink } from "./SideBar.types";
import { SideBarLink } from "./components/SideBarLink";

class SideBarLinkData implements ISideBarLink {
  constructor(
    public to: string,
    public name: string,
    public Icon: React.ComponentType
  ) {}
}

const sideBarLinks: ISideBarLink[] = [
  new SideBarLinkData(ROUTE.EMPLOYEES, "Employees", EmojiPeopleIcon),
  new SideBarLinkData(ROUTE.PROJECTS, "Projects", DnsIcon),
  new SideBarLinkData(ROUTE.CVS, "CVs", AutoStoriesIcon),
  new SideBarLinkData(ROUTE.ENTITIES, "Entities", FolderIcon),
];

export const SideBar = () => {
  return (
    <StyledDiv>
      {sideBarLinks.map(({ to, name, Icon }) => (
        <>
          <SideBarLink to={to} name={name} icon={<Icon />} />
        </>
      ))}
    </StyledDiv>
  );
};
