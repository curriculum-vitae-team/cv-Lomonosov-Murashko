import { useState } from "react";
import { Breadcrumb } from "@components/Breadcrumb";
import { Box, Tabs, Tab, Stack } from "@mui/material";
import { employeesMock } from "@mock/emp";
import { Outlet, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ROUTE } from "@constants/route";
import { PageTop } from "@components/styled/PageTop";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { cvsMock } from "@mock/cvs";

export const EmployeePage = () => {
  const { employeeId } = useParams();
  const { cvId } = useParams();

  const employee = employeesMock.find(({ id }) => id === employeeId)!;

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const { pathname } = useLocation();

  const pathnames = pathname.split("/");

  const [selectedTab, setSelectedTab] = useState<number>(
    pathnames.includes("cv") ? 1 : 0,
  );

  return (
    <Stack sx={{ width: "100%" }}>
      <PageTop>
        <Breadcrumb
          config={{
            info: "Info",
            cv: "CV",
            employees: "Employees",
            [employeeId!]: employee
              ? employee.name + " " + employee.lastName
              : employeeId!,
          }}
        />
        <PageTopTypography
          title="Employees"
          caption={employee.name + " " + employee.lastName + "`s profile"}
        />
      </PageTop>
      <PageBody>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab
              label="Info"
              component={Link}
              to={ROUTE.EMPLOYEES + "/" + employeeId}
            />
            <Tab
              label="CV"
              component={Link}
              to={"cv" + "/" + (cvId ? cvId : cvsMock[0].id)}
            />
          </Tabs>
        </Box>
        <Outlet />
      </PageBody>
    </Stack>
  );
};
