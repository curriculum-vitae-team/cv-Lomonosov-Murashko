import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { Content } from "./Layout.styles";

export function Layout() {
  return (
    <>
      <Header />
      <Content>
        <SideBar />
        <Outlet />
      </Content>
      <Footer />
    </>
  );
}
