import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { StyledTable } from "@components/styled/StyledTable";
import { TableEntry } from "@constants/table";

export const cvs = [
  { id: "1", name: "cv1", description: "aoaoao1" },
  { id: "2", name: "cv2", description: "aoaoao2" },
  { id: "3", name: "cv3", description: "aoaoao3" },
];

const head = [
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "description", columnName: "Description", isSortable: true },
];

export const CvsPage = () => {
  const handleItemDelete = (id: string) => {
    // TODO:
  };

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb config={{ cvs: "CV list" }} />
        <PageTopTypography title="CV list" caption="All employees CVs" />
      </PageTop>
      <PageBody>
        <StyledTable
          onDelete={handleItemDelete}
          head={head}
          items={cvs}
          redirectButtonText="CV details"
          deleteButtonText="Delete"
          entryType={TableEntry.CV}
        />
      </PageBody>
    </PageWrapper>
  );
};
