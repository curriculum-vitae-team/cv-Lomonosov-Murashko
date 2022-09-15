import { Dispatch, RefObject, SetStateAction } from "react";

export type SidebarProviderProps = {
  children: React.ReactNode;
};

export interface ISidebarContext {
  isSidebarOpened: boolean;
  sidebarRef: RefObject<HTMLDivElement>;
  setIsSidebarOpened: Dispatch<SetStateAction<boolean>>;
  handleMenuBurgerClick: (e: React.SyntheticEvent) => void;
}
