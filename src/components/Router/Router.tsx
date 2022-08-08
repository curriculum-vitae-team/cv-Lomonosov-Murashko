import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CvsPage } from "@pages/CvsPage";
import { EmployeesPage } from "@pages/EmployeesPage/";
import { EntitiesPage } from "@pages/EntitiesPage";
import { NotFoundPage } from "@pages/NotFoundPage";
import { ProjectsPage } from "@pages/ProjectsPage";
import { RedirectPage } from "@pages/RedirectPage";
import { Layout } from "../Layout";
import { EmployeePage } from "@pages/EmployeesPage/pages/EmployeePage";
import { EmployeeCv } from "@pages/EmployeesPage/pages/EmployeeCv";
import { ROUTE, ROUTE_PARAM } from "@constants/route";
import { EmployeeInfoPage } from "@pages/EmployeesPage/pages/EmployeeInfoPage";
import { ProjectPage } from "@pages/ProjectsPage/pages/ProjectPage";
import { CvPage } from "@pages/CvsPage/components/CvPage";
import { CvInfoPage } from "@pages/CvsPage/components/CvInfoPage";
import { ProjectInfoPage } from "@pages/ProjectInfoPage";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTE.EMPTY} element={<Layout />}>
          <Route index element={<RedirectPage to={ROUTE.EMPLOYEES} />} />
          <Route path={ROUTE.EMPLOYEES} element={<EmployeesPage />} />
          <Route path={ROUTE.TARGET_EMPLOYEE} element={<EmployeePage />}>
            <Route index element={<EmployeeInfoPage />} />
            <Route path={ROUTE.TARGET_EMPLOYEE_CV} element={<EmployeeCv />}>
              <Route path={ROUTE_PARAM.CV_ID} element={<CvInfoPage />} />
            </Route>
          </Route>
          <Route path={ROUTE.PROJECTS} element={<ProjectsPage />} />
          <Route path={ROUTE.TARGET_PROJECT} element={<ProjectPage />}>
            <Route index element={<ProjectInfoPage />} />
          </Route>
          <Route path={ROUTE.CVS} element={<CvsPage />} />
          <Route path={ROUTE.TARGET_CV} element={<CvPage />} />
          <Route path={ROUTE.ENTITIES} element={<EntitiesPage />} />
          <Route path={ROUTE.ANY_OTHER} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
