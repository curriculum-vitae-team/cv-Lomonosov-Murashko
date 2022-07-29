import { StyledDiv } from "./SideBar.styles";

import { SideBarLink } from "./components/SideBarLink";
import { sideBarLinks } from "./SideBar.data";

export const SideBar = () => {
  return (
    <StyledDiv>
      {sideBarLinks.map(({ to, name, Icon }, i) => (
        <SideBarLink to={to} name={name} icon={<Icon />} key={i} />
      ))}
    </StyledDiv>
  );
};
