import { ROUTE } from "@constants/route";
import { RedirectPage } from "@pages/RedirectPage";
import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Content } from "./Layout.styles";

export function Layout() {
  const isUserAuthorized = !!localStorage.getItem("user");

  return (
    <>
      {!isUserAuthorized ? (
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
