import { Breadcrumb } from "@components/Breadcrumb";
import { PageTop } from "@components/styled/PageTop";
import { PageBody } from "@components/styled/PageBody";
import { PageTopTypography } from "@components/PageTopTypography";
import { Stack } from "@mui/material";
import { Outlet, useParams } from "react-router";

export const ProjectPage = () => {
  const { projectId } = useParams();

  return (
    <Stack sx={{ width: "100%" }}>
      <PageTop>
        <Breadcrumb
          config={{
            info: "Info",
            cv: "CV",
            projects: "Projects",
          }}
        />

        <PageTopTypography
          title="Projects"
          caption={"Project: " /* + project.name */}
        />
      </PageTop>
      <PageBody>
        <Outlet />
      </PageBody>
    </Stack>
  );
};
