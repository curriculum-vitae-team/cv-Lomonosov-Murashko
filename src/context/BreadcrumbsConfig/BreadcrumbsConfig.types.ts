export type BreadcrumbsConfigProps = {
  config: {
    [key: string]: string;
  };
  children?: React.ReactNode;
};

export type BreadcrumbsConfigContext = {
  [key: string]: string;
};
