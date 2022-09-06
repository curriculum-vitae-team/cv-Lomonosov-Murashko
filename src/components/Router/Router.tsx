import { BrowserRouter, Route, Routes } from "react-router-dom";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
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
import { CvInfoUpdatePage } from "@pages/CvsPage/components/CvInfoUpdatePage";
import { ProjectInfoPage } from "@pages/ProjectInfoPage";
import { SignIn } from "@pages/SignIn";
import { SignUp } from "@pages/SignUp";
import { Auth } from "@pages/Auth";
import { browserHistory } from "@src/browserHistory";
import { ProjectInfoCreate } from "@components/ProjectInfo/components/ProjectInfoCreate";
import { ProtectedRoute } from "./ProtectedRoute";
import { authGuard, roleGuard } from "@helpers/guard";
import { ROLES } from "@constants/roles";
import { EmployeeInfoCreate } from "@pages/EmployeesPage/pages/EmployeeInfo/components/EmployeeInfoCreate";

export function Router() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route element={<Auth />}>
          <Route path={ROUTE.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTE.SIGN_UP} element={<SignUp />} />
        </Route>
        <Route path={ROUTE.EMPTY} element={<Layout />}>
          <Route
            element={
              <ProtectedRoute
                guards={[authGuard]}
                fallback={() => <RedirectPage to={ROUTE.SIGN_IN} />}
                path={ROUTE.EMPLOYEES}
              />
            }
          >
            <Route index element={<RedirectPage to={ROUTE.EMPLOYEES} />} />
            <Route path={ROUTE.EMPLOYEES} element={<EmployeesPage />} />
            <Route path={ROUTE.ADD_EMPLOYEE} element={<EmployeeInfoCreate />} />
            <Route path={ROUTE.TARGET_EMPLOYEE} element={<EmployeePage />}>
              <Route index element={<EmployeeInfoPage />} />
              <Route path={ROUTE.TARGET_EMPLOYEE_CV} element={<EmployeeCv />}>
                <Route
                  path={ROUTE_PARAM.CV_ID}
                  element={<CvInfoUpdatePage />}
                />
              </Route>
            </Route>
            <Route path={ROUTE.PROJECTS} element={<ProjectsPage />} />
            <Route path={ROUTE.ADD_PROJECT} element={<ProjectInfoCreate />} />
            <Route path={ROUTE.TARGET_PROJECT} element={<ProjectPage />}>
              <Route index element={<ProjectInfoPage />} />
            </Route>
          </Route>
          <Route path={ROUTE.CVS} element={<CvsPage />} />
          <Route path={ROUTE.TARGET_CV} element={<CvInfoUpdatePage />} />
          <Route
            element={
              <ProtectedRoute
                guards={[roleGuard([ROLES.ADMIN])]}
                fallback={() => <RedirectPage to={ROUTE.ANY_OTHER} />}
              />
            }
          >
            <Route path={ROUTE.ENTITIES} element={<EntitiesPage />} />
          </Route>
        </Route>
        <Route path={ROUTE.ANY_OTHER} element={<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}
