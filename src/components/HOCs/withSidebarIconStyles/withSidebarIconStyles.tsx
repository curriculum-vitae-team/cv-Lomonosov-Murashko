import React from "react";
import { InjectedProps } from "./withSidebarIconStyles.types";

export function withSidebarIconStyles<T extends InjectedProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const ComponentWithSidebarIconStyles = ({
    isActive,
    ...otherProps
  }: {
    isActive: boolean;
    otherProps?: Omit<T, keyof InjectedProps>;
  }) => {
    const sx = {
      width: "0.7em",
      color: isActive ? "#1890FF" : "#000",
    };

    return <WrappedComponent {...(otherProps as unknown as T)} sx={sx} />;
  };

  return ComponentWithSidebarIconStyles;
}
