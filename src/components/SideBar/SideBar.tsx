import { StyledDiv } from "./SideBar.styles";

import { SideBarLink } from "./components/SideBarLink";
import { sideBarLinks } from "./SideBar.data";

export function SideBar() {
  return (
    <StyledDiv>
      {sideBarLinks.map(({ to, name, Icon }) => (
        <SideBarLink to={to} name={name} icon={<Icon />} key={to} />
      ))}
    </StyledDiv>
  );
}
