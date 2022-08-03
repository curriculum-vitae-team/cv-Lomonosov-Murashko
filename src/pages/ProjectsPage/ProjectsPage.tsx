import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { StyledTable } from "@components/styled/StyledTable";
import { TableEntry } from "@constants/table";

export const proj = [
  { id: "1", name: "p1", startDate: "10.10.2012", endDate: "10.11.2052" },
  { id: "2", name: "p2", startDate: "10.10.2022", endDate: "10.11.2052" },
  { id: "3", name: "p3", startDate: "10.10.2032", endDate: "10.11.2052" },
];

const head = [
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
          items={proj}
          redirectButtonText="Project details"
          deleteButtonText="Delete"
          entryType={TableEntry.PROJECT}
        />
      </PageBody>
    </PageWrapper>
  );
};
