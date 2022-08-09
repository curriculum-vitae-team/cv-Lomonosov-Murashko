import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createStyledTable } from "@components/styled/StyledTable";
import { TableEntry } from "@constants/table";
import { removed } from "@features/projects/projectsSlice";
import { IProjectTable } from "@interfaces/IProject";
import format from "date-fns/format";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";

const head = [
  { columnKey: "internalName", columnName: "Internal name", isSortable: true },
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "startDate", columnName: "Start date", isSortable: true },
  { columnKey: "endDate", columnName: "End date", isSortable: true },
];

const StyledTable = createStyledTable<IProjectTable>();

export const ProjectsPage = () => {
  const projects = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();

  const handleItemDelete = (id: string) => {
    dispatch(removed(id));
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
          items={projects.map((pr) => ({
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
