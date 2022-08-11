import { useState } from "react";
import { Breadcrumb } from "@components/Breadcrumb";
import { Box, Tabs, Tab, Stack } from "@mui/material";
import { Outlet, useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import { ROUTE } from "@constants/route";
import { PageTop } from "@components/styled/PageTop";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { cvsMock } from "@mock/cvs";
import { useQuery } from "@apollo/client";
import { GET_USER_FULLNAME, UserFullnameData } from "@graphql/User";
import { PageWrapper } from "@components/styled/PageWrapper";

export const EmployeePage = () => {
  const { employeeId } = useParams();
  const { cvId } = useParams();

  const [loading, setLoading] = useState(true);

  const { data } = useQuery<UserFullnameData>(GET_USER_FULLNAME, {
    variables: {
      id: employeeId,
    },
    onCompleted: () => {
      setLoading(false);
    },
  });

  const handleChange = (e: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const { pathname } = useLocation();

  const pathnames = pathname.split("/");

  const [selectedTab, setSelectedTab] = useState<number>(
    pathnames.includes("cv") ? 1 : 0,
  );

  const displayedName = data?.user
    ? data.user.profile.first_name + " " + data.user.profile.last_name
    : "";

  if (loading) return <>loader</>;

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb
          config={{
            info: "Info",
            cv: "CV",
            employees: "Employees",
            [employeeId!]: displayedName,
          }}
        />
        <PageTopTypography
          title="Employees"
          caption={displayedName + "'s profile"}
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
    </PageWrapper>
  );
};
