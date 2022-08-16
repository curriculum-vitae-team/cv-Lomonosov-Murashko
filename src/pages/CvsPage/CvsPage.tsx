import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { TableEntry } from "@constants/table";
import { removed } from "@features/cvs/cvsSlice";
import { ICVTable } from "@interfaces/ICV";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";

const head = [
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "description", columnName: "Description", isSortable: true },
];

const Table = createTable<ICVTable>();

export const CvsPage = () => {
  const cvs = useSelector((state: RootState) => state.cvs)!;
  const dispatch = useDispatch();

  const handleItemDelete = (id: string) => {
    dispatch(removed(id));
  };

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb
          config={{
            cvs: "Cvs",
          }}
        />
        <PageTopTypography title="CVs" caption="Cvs list" />
      </PageTop>
      <PageBody>
        <Table
          onDelete={handleItemDelete}
          head={head}
          items={cvs}
          redirectButtonText="CV details"
          deleteButtonText="Delete"
          entryType={TableEntry.CV}
          showNewEntryButton={true}
        />
      </PageBody>
    </PageWrapper>
  );
};
