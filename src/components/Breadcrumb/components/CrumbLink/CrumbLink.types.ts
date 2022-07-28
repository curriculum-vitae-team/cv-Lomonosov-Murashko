export type CrumbLinkProps = {
  path: string;
  crumb: string;
  onLinkClick: (crumb: string) => void;
};
