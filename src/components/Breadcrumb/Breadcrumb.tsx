import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { StyledDiv } from "./Breadcrumb.styles";
import { Crumb } from "./components/Crumb";
import { CrumbLink } from "./components/CrumbLink";

export const Breadcrumb = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const crumbs = pathname.split("/").filter((crumb: string) => crumb);

  const isLast = (idx: number) => {
    return idx === crumbs.length - 1;
  };

  const handlePathClick = (path: string) => {
    const index = crumbs.findIndex((val) => val === path);
    const newPath = crumbs.slice(0, index + 1).join("/");

    navigate("/" + newPath);
  };

  return (
    <StyledDiv>
      {crumbs.map((crumb: string, index: number) => {
        const path = crumb[0]
          .toUpperCase()
          .concat(crumb.slice(1, crumb.length));

        return isLast(index) ? (
          <Crumb key={index} path={path} />
        ) : (
          <CrumbLink
            key={index}
            crumb={crumb}
            onLinkClick={handlePathClick}
            path={path}
          />
        );
      })}
    </StyledDiv>
  );
};
