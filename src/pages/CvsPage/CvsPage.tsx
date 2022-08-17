import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { TableEntry } from "@constants/table";
import { DELETE_CV, GET_ALL_CVS } from "@graphql/Cv/Cv.queries";
import {
  CvsData,
  DeleteCvInput,
  DeleteCvOutput,
} from "@graphql/Cv/Cv.interface";
import { ICVTable } from "@interfaces/ICV";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { deleteCvCacheUpdate } from "@graphql/Cv/Cv.cache";

const head = [
  { columnKey: "name", columnName: "Name", isSortable: true },
  { columnKey: "description", columnName: "Description", isSortable: true },
];

const Table = createTable<ICVTable>();

export const CvsPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const { data } = useQuery<CvsData>(GET_ALL_CVS, {
    onCompleted: () => {
      setLoading(false);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const [deleteCv] = useMutation<DeleteCvOutput, DeleteCvInput>(DELETE_CV);

  const handleItemDelete = (id: string) => {
    deleteCv({
      variables: { id },
      update: deleteCvCacheUpdate(id),
    });
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
        {loading
          ? "loader"
          : error
          ? "error"
          : data?.cvs && (
              <Table
                onDelete={handleItemDelete}
                head={head}
                items={data.cvs}
                redirectButtonText="CV details"
                deleteButtonText="Delete"
                entryType={TableEntry.CV}
                showNewEntryButton={true}
              />
            )}
      </PageBody>
    </PageWrapper>
  );
};
