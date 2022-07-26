import { Stack } from "@mui/material";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { LayoutProps } from "./Layout.types";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack direction="row">
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};
