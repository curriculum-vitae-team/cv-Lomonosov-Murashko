import { Stack } from "@mui/material";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack direction="row">
      <Header />
      <SideBar />
      {children}
      <Footer />
    </Stack>
  );
};
