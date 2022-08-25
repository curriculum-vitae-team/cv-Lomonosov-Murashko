import { ROUTE } from "@constants/route";
import { Stack } from "@mui/material";
import { RedirectPage } from "@pages/RedirectPage";
import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

export function Layout() {
  const isUserAuthorized = !!localStorage.getItem("user");

  return (
    <>
      {!isUserAuthorized ? (
        <RedirectPage to={ROUTE.SIGN_IN} />
      ) : (
        <>
          <Header />
          <Stack direction="row">
            <SideBar />
            <Outlet />
          </Stack>
          <Footer />
        </>
      )}
    </>
  );
}
