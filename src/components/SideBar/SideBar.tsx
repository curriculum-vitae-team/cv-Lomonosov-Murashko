import { StyledPaper } from "./SideBar.styles";

import { SideBarLink } from "./components/SideBarLink";
import { sideBarLinks, sideBarEntityLink } from "./SideBar.data";
import { SideBarLinkWithAdminAccess } from "./components/SideBarLink";

export function SideBar() {
  return (
    <StyledPaper>
      {sideBarLinks.map(({ to, name, Icon }) => (
        <SideBarLink to={to} name={name} icon={<Icon />} key={to} />
      ))}
      <SideBarLinkWithAdminAccess
        to={sideBarEntityLink.to}
        name={sideBarEntityLink.name}
        icon={<sideBarEntityLink.Icon />}
      />
    </StyledPaper>
  );
}
