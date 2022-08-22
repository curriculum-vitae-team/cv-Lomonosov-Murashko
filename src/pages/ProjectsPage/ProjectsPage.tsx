import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { TableEntry } from "@constants/table";
import { IProjectTable } from "@interfaces/IProject";
import { projectsMock } from "@mock/projects";
import format from "date-fns/format";
import { useCallback } from "react";
import { tableHead } from "./tableHead";

const Table = createTable<IProjectTable>();

export const ProjectsPage = () => {
  const projects = projectsMock;

  const handleItemDelete = useCallback((id: string) => {
    // TODO: Remove
  }, []);

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb config={{ projects: "Projects" }} />
        <PageTopTypography title="Projects" caption="Projects list" />
      </PageTop>
      <PageBody>
        <Table
          onDelete={handleItemDelete}
          head={tableHead}
          items={projects.map((pr) => ({
            ...pr,
            startDate: format(pr.startDate, "PP"),
            endDate: format(pr.endDate, "PP"),
          }))}
          redirectButtonText="Project details"
          deleteButtonText="Delete"
          entryType={TableEntry.PROJECT}
          showNewEntryButton={true}
        />
      </PageBody>
    </PageWrapper>
  );
};
