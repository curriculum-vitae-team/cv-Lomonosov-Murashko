import { ROUTE } from "@constants/route";
import { RedirectPage } from "@pages/RedirectPage";
import { AuthContext } from "@context/authContext/authContext";
import { useContext, useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Content } from "./Layout.styles";
import { SidebarContext } from "@context/sidebarContext/sidebarContext";

export function Layout() {
  const { user } = useContext(AuthContext);
  const { sidebarRef, burgerMenuRef, setIsSidebarOpened } =
    useContext(SidebarContext);
  const location = useLocation();

  useEffect(() => {
    sidebarRef.current!.classList.remove("show");
    burgerMenuRef.current!.checked = false;
  }, [burgerMenuRef, location, setIsSidebarOpened, sidebarRef]);

  return (
    <>
      {!user ? (
        <RedirectPage to={ROUTE.SIGN_IN} />
      ) : (
        <>
          <Header />
          <Content>
            <SideBar />
            <Outlet />
          </Content>
          <Footer />
        </>
      )}
    </>
  );
}
