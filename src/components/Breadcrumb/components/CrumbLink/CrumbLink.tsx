import { CrumbLinkProps } from "./CrumbLink.types";

export const CrumbLink = ({ path, crumb, onLinkClick }: CrumbLinkProps) => {
  return (
    <>
      <span>/ </span>
      <div className="link" onClick={() => onLinkClick(crumb)}>
        {path}
      </div>
    </>
  );
};
