import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { StyledTable } from "@components/styled/StyledTable";
import { TableEntry } from "@constants/table";
import format from "date-fns/format";
import { projectsMock } from "../../mock/projects";

const head = [
  { columnKey: "internalName", columnName: "Internal name", isSortable: true },
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "startDate", columnName: "Start date", isSortable: true },
  { columnKey: "endDate", columnName: "End date", isSortable: true },
];

export const ProjectsPage = () => {
  const handleItemDelete = (id: string) => {
    // TODO:
  };

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb config={{ projects: "Projects" }} />
        <PageTopTypography title="Projects" caption="Projects list" />
      </PageTop>
      <PageBody>
        <StyledTable
          onDelete={handleItemDelete}
          head={head}
          items={projectsMock.map((pr) => ({
            ...pr,
            startDate: format(pr.startDate, "PP"),
            endDate: format(pr.endDate, "PP"),
          }))}
          redirectButtonText="Project details"
          deleteButtonText="Delete"
          entryType={TableEntry.PROJECT}
        />
      </PageBody>
    </PageWrapper>
  );
};
