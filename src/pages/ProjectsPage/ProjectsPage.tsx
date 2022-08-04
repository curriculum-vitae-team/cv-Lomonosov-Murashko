import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { StyledTable } from "@components/styled/StyledTable";
import { TableEntry } from "@constants/table";
import { IProject } from "@interfaces/IProject";
import format from "date-fns/format";

export const proj: IProject[] = [
  {
    id: "1",
    internalName: "internal1",
    name: "project1",
    startDate: new Date(2022, 9, 1),
    endDate: new Date(2022, 9, 1),
    techStack: "pascal ABC",
    teamSize: 26,
    domain: "mental health",
    description: "I love hugs",
  },
  {
    id: "2",
    internalName: "internal2",
    name: "project2",
    startDate: new Date(2022, 9, 1),
    endDate: new Date(2022, 9, 1),
    techStack: "pascal ABC",
    teamSize: 26,
    domain: "mental health",
    description: "I love hugs",
  },
  {
    id: "3",
    internalName: "internal3",
    name: "project3",
    startDate: new Date(2022, 9, 1),
    endDate: new Date(2022, 9, 1),
    techStack: "pascal ABC",
    teamSize: 26,
    domain: "mental health",
    description: "I love hugs",
  },
  {
    id: "4",
    internalName: "internal4",
    name: "project4",
    startDate: new Date(2022, 9, 1),
    endDate: new Date(2022, 9, 1),
    techStack: "pascal ABC",
    teamSize: 26,
    domain: "mental health",
    description: "I love hugs",
  },
];

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
          items={proj.map((pr) => ({
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
