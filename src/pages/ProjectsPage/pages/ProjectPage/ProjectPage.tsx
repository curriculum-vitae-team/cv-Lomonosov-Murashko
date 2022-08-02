import { Breadcrumb } from "../../../../components/Breadcrumb";
import { Typography, Stack } from "@mui/material";

import { proj } from "../../ProjectsPage";
import { Outlet, useParams } from "react-router";
import { BreadcrumbsConfig } from "@/context/BreadcrumbsConfig";
import { PageTop } from "@/components/styled/PageTop";
import { PageBody } from "@/components/styled/PageBody";
import { PageTopTypography } from "@/components/PageTopTypography";

export const ProjectPage = () => {
  const { projectId } = useParams();

  const project = proj.find(({ id }) => id === projectId)!;

  return (
    <Stack>
      <PageTop>
        <BreadcrumbsConfig
          config={{
            info: "Info",
            cv: "CV",
            projects: "Projects",
            [projectId!]: project ? project.name : projectId!,
          }}
        >
          <Breadcrumb />
        </BreadcrumbsConfig>
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
