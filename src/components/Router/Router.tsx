import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CvsPage } from "../../pages/CvsPage/CvsPage";
import { EmployeesPage } from "../../pages/EmployeesPage/EmployeesPage";
import { EntitiesPage } from "../../pages/EntitiesPage/EntitiesPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";
import { SideBar } from "../SideBar";
import { ROUTE } from "../../route/route";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Stack } from "@mui/material";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Stack flexDirection="row">
        <SideBar />
        <Routes>
          <Route
            path={ROUTE.EMPTY}
            element={<Navigate to={ROUTE.EMPLOYEES} />}
          />
          <Route path={ROUTE.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTE.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTE.CVS} element={<CvsPage />} />
          <Route path={ROUTE.ENTITIES} element={<EntitiesPage />} />
          <Route path={ROUTE.ANY_OTHER} element={<NotFoundPage />} />
        </Routes>
      </Stack>

      <Footer />
    </BrowserRouter>
  );
};
