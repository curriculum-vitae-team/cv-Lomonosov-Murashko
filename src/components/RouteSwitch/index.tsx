import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CvsPage } from "../../pages/CvsPage";
import { EmployeesPage } from "../../pages/EmployeesPage";
import { EntitiesPage } from "../../pages/EntitiesPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ProjectsPage } from "../../pages/ProjectsPage";
import { SideBar } from "../SideBar";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Stack } from "@mui/material";

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Stack direction="row">
        <SideBar />
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/cvs" element={<CvsPage />} />
          <Route path="/entities" element={<EntitiesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Stack>
      <Footer />
    </BrowserRouter>
  );
};
