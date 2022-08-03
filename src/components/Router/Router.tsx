import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CvsPage } from "@pages/CvsPage";
import { EmployeesPage } from "@pages/EmployeesPage/";
import { EntitiesPage } from "@pages/EntitiesPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { ProjectsPage } from "@pages/ProjectsPage";
import { RedirectPage } from "@pages/RedirectPage";
import { Layout } from "@components/Layout";
import { EmployeePage } from "@pages/EmployeesPage/pages/EmployeePage";
import { EmployeeCv } from "@pages/EmployeesPage/pages/EmployeeCv";
import { ROUTE } from "@constants/route";
import { EmployeeInfo } from "@pages/EmployeesPage/pages/EmployeeInfo";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.EMPTY} element={<Layout />}>
          <Route index element={<RedirectPage to={ROUTE.EMPLOYEES} />} />
          <Route path={ROUTE.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTE.TARGET_EMPLOYEE} element={<EmployeePage />}>
            <Route
              index
              element={<RedirectPage to={ROUTE.TARGET_EMPLOYEE_INFO} />}
            />

            <Route
              path={ROUTE.TARGET_EMPLOYEE_INFO}
              element={<EmployeeInfo />}
            />
            <Route path={ROUTE.TARGET_EMPLOYEE_CV} element={<EmployeeCv />} />
          </Route>
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
