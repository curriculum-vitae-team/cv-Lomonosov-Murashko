import { useState } from "react";
import { Breadcrumb } from "../../../../components/Breadcrumb";
import {
  StyledWrapperDiv,
  StyledTypography,
  WrapperDiv,
} from "./EmployeePage.styles";
import { Typography, Box, Tabs, Tab } from "@mui/material";

import { emp } from "../../EmployeesPage";
import { Outlet, useParams } from "react-router";
import { Link } from "react-router-dom";
import { BreadcrumbsConfig } from "@/context/BreadcrumbsConfig";

export const EmployeePage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const { employeeId } = useParams();

  const employee = emp.find(({ id }) => id === employeeId)!;

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <WrapperDiv>
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
      <StyledTypography variant="h5">Employees</StyledTypography>
      <Typography padding="1rem" variant="body2">
        {employee.name + " " + employee.lastName + "`s profile"}
      </Typography>
      <StyledWrapperDiv>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <Tab label="Info" component={Link} to="info" />
            <Tab label="CV" component={Link} to="cv" />
          </Tabs>
        </Box>
        <Outlet />
      </StyledWrapperDiv>
    </WrapperDiv>
  );
};
