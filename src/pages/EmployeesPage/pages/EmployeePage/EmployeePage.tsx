import { useState } from "react";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import { StyledStack, StyledDiv } from "./EmployeePage.styles";
import { Typography, Box, Tabs, Tab, Stack } from "@mui/material";

import { emp } from "../../EmployeesPage";
import { Outlet, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { BreadcrumbsConfig } from "@/context/BreadcrumbsConfig";

export const EmployeePage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const { employeeId } = useParams();

  const employee = emp.find(({ id }) => id === employeeId)!;

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const { pathname } = useLocation();

  const pathnames = pathname.split("/");

  return (
    <Stack>
      <StyledStack spacing={2}>
        <BreadcrumbsConfig
          config={{
            info: "Info",
            cv: "CV",
            employees: "Employees",
            [employeeId!]: employee
              ? employee.name + " " + employee.lastName
              : employeeId!,
          }}
        >
          <Breadcrumb />
        </BreadcrumbsConfig>
        <Typography variant="h6">Employees</Typography>
        <Typography variant="caption">
          {employee.name + " " + employee.lastName + "`s profile"}
        </Typography>
      </StyledStack>
      <StyledDiv>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab
              label="Info"
              component={Link}
              to={pathnames.slice(0, pathnames.length - 1).join("/")}
            />
            <Tab label="CV" component={Link} to="cv" />
          </Tabs>
        </Box>
        <Outlet />
      </StyledDiv>
    </Stack>
  );
};
