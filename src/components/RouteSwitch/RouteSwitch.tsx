import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CvsPage } from "../../pages/CvsPage/CvsPage";
import { EmployeesPage } from "../../pages/EmployeesPage/EmployeesPage";
import { EntitiesPage } from "../../pages/EntitiesPage/EntitiesPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
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
