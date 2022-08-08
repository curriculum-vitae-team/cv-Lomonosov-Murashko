import { Breadcrumb } from "@components/Breadcrumb";
import { PageTop } from "@components/styled/PageTop";
import { PageBody } from "@components/styled/PageBody";
import { PageTopTypography } from "@components/PageTopTypography";
import { Stack } from "@mui/material";
import { projectsMock } from "../../../../mock/projects";
import { Outlet, useParams } from "react-router";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const project = projectsMock.find(({ id }) => id === projectId)!;

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
