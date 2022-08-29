import { ROUTE } from "@constants/route";
import { RedirectPage } from "@pages/RedirectPage";
import { isUserExists } from "@src/helpers/localStorage";
import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Content } from "./Layout.styles";

export function Layout() {
  const isUserUnauthorized = !isUserExists();

  return (
    <>
      {isUserUnauthorized ? (
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
