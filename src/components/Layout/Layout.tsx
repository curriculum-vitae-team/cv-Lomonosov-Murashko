import { ROUTE } from "@constants/route";
import { RedirectPage } from "@pages/RedirectPage";
import { AuthContext } from "@context/authContext/authContext";
import { useContext } from "react";
import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Content } from "./Layout.styles";

export function Layout() {
  const { user } = useContext(AuthContext);    
  
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
