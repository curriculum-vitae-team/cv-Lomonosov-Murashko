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
import { EmployeeCv } from "../EmployeeCv";
import { Link } from "react-router-dom";
import { EmployeeInfo } from "../EmployeeInfo/EmployeeInfo";
import { ROUTE } from "@/constants/route";

export const EmployeePage = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const { employeeId } = useParams();

  let employ = {
    name: "",
    lastName: "",
    email: "",
    department: "",
    specialization: "",
  };

  emp.forEach((employee: any) => {
    if (employee.id === employeeId) {
      employ = {
        name: employee.name,
        lastName: employee.lastName,
        email: employee.email,
        department: employee.department,
        specialization: employee.specialization,
      };
    }
  });

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  console.log("REDNER");

  return (
    <WrapperDiv>
      <Breadcrumb />
      <StyledTypography variant="h5">Employees</StyledTypography>
      <Typography padding="1rem" variant="body2">
        {employ.name + " " + employ.lastName + "`s profile"}
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
