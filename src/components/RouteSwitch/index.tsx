import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CvsPage } from "../../pages/CvsPage";
import { EmployeesPage } from "../../pages/EmployeesPage";
import { EntitiesPage } from "../../pages/EntitiesPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { ProjectsPage } from "../../pages/ProjectsPage";
import { Header } from "../Header";

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/employees" />} />
        <Route path="/employees" element={<EmployeesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cvs" element={<CvsPage />} />
        <Route path="/entities" element={<EntitiesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
