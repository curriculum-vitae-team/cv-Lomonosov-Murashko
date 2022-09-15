import { useMutation, useQuery } from "@apollo/client";
import { Breadcrumb } from "@components/Breadcrumb";
import { PageTopTypography } from "@components/PageTopTypography";
import { PageBody } from "@components/styled/PageBody";
import { PageTop } from "@components/styled/PageTop";
import { PageWrapper } from "@components/styled/PageWrapper";
import { createTable } from "@components/Table/Table";
import { TableEntry } from "@constants/table";
import {
  DeleteProjectInput,
  DeleteProjectOutput,
  ProjectsData,
} from "@graphql/Project/Project.interface";
import { deleteProjectCacheUpdate } from "@graphql/Project/Project.cache";
import { DELETE_PROJECT, GET_PROJECTS } from "@graphql/Project/Project.queries";
import { IProjectTable } from "@interfaces/IProject";
import { useCallback, useState } from "react";
import { getProjects } from "./helpers";
import { useNavigate } from "react-router";
import { ROUTE } from "@constants/route";
import { Loader } from "@components/Loader";
import { useMediaQuery } from "@src/hooks/useMediaQuery";
import {
  mediumScreenTableHead,
  smallScreenTableHead,
  tableHead,
} from "./tableHead";

const Table = createTable<IProjectTable>();

export const ProjectsPage = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const isMediumScreenMatch = useMediaQuery("(max-width: 790px)");
  const isSmallScreenMatch = useMediaQuery("(max-width: 640px)");

  const { data } = useQuery<ProjectsData>(GET_PROJECTS, {
    onCompleted: () => {
      setIsLoading(false);
    },
    onError: (error) => {
      setError(error.message);
    },
  });

  const [deleteProject] = useMutation<DeleteProjectOutput, DeleteProjectInput>(
    DELETE_PROJECT,
  );

  const handleItemDelete = useCallback(
    (id: string) => {
      deleteProject({
        variables: { id },
        update: deleteProjectCacheUpdate(id),
      });
    },
    [deleteProject],
  );

  const handleCreate = useCallback(() => {
    navigate(ROUTE.ADD_PROJECT);
  }, [navigate]);

  return (
    <PageWrapper>
      <PageTop>
        <Breadcrumb config={{ projects: "Projects" }} />
        <PageTopTypography title="Projects" caption="Projects list" />
      </PageTop>
      <PageBody>
        {isLoading ? (
          <Loader />
        ) : error ? (
          "error"
        ) : (
          data?.projects && (
            <Table
              onDelete={handleItemDelete}
              onCreate={handleCreate}
              head={
                isSmallScreenMatch
                  ? smallScreenTableHead
                  : isMediumScreenMatch
                  ? mediumScreenTableHead
                  : tableHead
              }
              items={getProjects(data.projects)}
              redirectButtonText="Project details"
              deleteButtonText="Delete"
              entryType={TableEntry.PROJECT}
              showNewEntryButton={true}
              searchBy="name"
            />
          )
        )}
      </PageBody>
    </PageWrapper>
  );
};
