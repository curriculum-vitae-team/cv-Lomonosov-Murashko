import { createContext, useRef, useState } from "react";
import { ISidebarContext, SidebarProviderProps } from "./sidebarContext.types";

const SidebarContext = createContext({} as ISidebarContext);

const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isSidebarOpened, setIsSidebarOpened] = useState(true);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleMenuBurgerClick = (e: React.SyntheticEvent) => {
    sidebarRef.current?.classList.toggle("show");

    // e.preventDefault();
  };

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpened,
        sidebarRef,
        handleMenuBurgerClick,
        setIsSidebarOpened,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export { SidebarContext, SidebarProvider };
