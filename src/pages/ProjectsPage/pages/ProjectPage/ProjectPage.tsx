import { Breadcrumb } from "../../../../components/Breadcrumb";
import { Stack } from "@mui/material";

import { projects } from "../../ProjectsPage";
import { Outlet, useParams } from "react-router";
import { PageTop } from "@components/styled/PageTop";
import { PageBody } from "@components/styled/PageBody";
import { PageTopTypography } from "@components/PageTopTypography";

export const ProjectPage = () => {
  const { projectId } = useParams();

  const project = projects.find(({ id }) => id === projectId)!;

  return (
    <Stack sx={{ width: "100%" }}>
      <PageTop>
        <Breadcrumb
          config={{
            info: "Info",
            cv: "CV",
            projects: "Projects",
            [projectId!]: project ? project.name : projectId!,
          }}
        />

        <PageTopTypography
          title="Projects"
          caption={"Project: " + project.name}
        />
      </PageTop>
      <PageBody>
        <Outlet />
      </PageBody>
    </Stack>
  );
};
