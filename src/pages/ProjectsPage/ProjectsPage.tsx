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

const head = [
  { columnKey: "internalName", columnName: "Internal name", isSortable: true },
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "startDate", columnName: "Start date", isSortable: true },
  { columnKey: "endDate", columnName: "End date", isSortable: true },
];

const Table = createTable<IProjectTable>();

export const ProjectsPage = () => {
  const projects = projectsMock;

  const handleItemDelete = (id: string) => {
    // TODO: Remove
  };

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb config={{ projects: "Projects" }} />
        <PageTopTypography title="Projects" caption="Projects list" />
      </PageTop>
      <PageBody>
        <Table
          onDelete={handleItemDelete}
          head={head}
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
