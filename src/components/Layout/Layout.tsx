import { Stack } from "@mui/material";
import { Outlet } from "react-router";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

export const Layout = () => {
  return (
    <>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Outlet />
      </Stack>
      <Footer />
    </>
  );
};
