import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CvsPage } from "../../pages/CvsPage/CvsPage";
import { EmployeesPage } from "../../pages/EmployeesPage/EmployeesPage";
import { EntitiesPage } from "../../pages/EntitiesPage/EntitiesPage";
import { NotFoundPage } from "../../pages/NotFoundPage/NotFoundPage";
import { ProjectsPage } from "../../pages/ProjectsPage/ProjectsPage";
import { EmployeePage } from "../../pages/EmployeesPage/components/EmployeePage";
import { ROUTE } from "../../route/route";
import { Layout } from "../Layout";
import { RedirectPage } from "../../pages/RedirectPage";
import { EmployeeInfo } from "../../pages/EmployeesPage/components/EmployeeInfo";
import { EmployeeCv } from "../../pages/EmployeesPage/components/EmployeeCv";

export const Router = () => {
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
          <Route path={ROUTE.CVS} element={<CvsPage />} />
          <Route path={ROUTE.ENTITIES} element={<EntitiesPage />} />
          <Route path={ROUTE.ANY_OTHER} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
