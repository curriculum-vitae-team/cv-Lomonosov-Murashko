import { CrumbProps } from "./Crumb.types";

export const Crumb = ({ path }: CrumbProps) => {
  return (
    <>
      <span>/ </span>
      <div>{path}</div>
    </>
  );
};
