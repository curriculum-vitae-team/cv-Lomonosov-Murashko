import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CvsPage } from "../../pages/CvsPage/CvsPage";
import { EmployeesPage } from "../../pages/EmployeesPage/EmployeesPage";
import { EntitiesPage } from "../../pages/EntitiesPage/EntitiesPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";
import { EmployeeInfoPage } from "../../pages/EmployeesPage/pages/EmployeeInfoPage";
import { ROUTE } from "../../constants/route";
import { Layout } from "../Layout";
import { RedirectPage } from "../../pages/RedirectPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.EMPTY} element={<Layout />}>
          <Route index element={<RedirectPage to={ROUTE.EMPLOYEES} />} />
          <Route path={ROUTE.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTE.TARGET_EMPLOYEE} element={<EmployeeInfoPage />} />
          <Route path={ROUTE.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTE.TARGET_PROJECT} element={<NotFoundPage />} />
          <Route path={ROUTE.CVS} element={<CvsPage />} />
          <Route path={ROUTE.ENTITIES} element={<EntitiesPage />} />
          <Route path={ROUTE.ANY_OTHER} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
