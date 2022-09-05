import { useEffect, useState } from "react";
import { WrapperDiv, StyledButtonWrapper } from "../../EntitiesPage.styles";
import { InfoItem } from "@components/InfoItem";
import { Outlet, useNavigate, useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { FetchResult, useMutation, useQuery } from "@apollo/client";
import { ROUTE } from "@constants/route";
import { useSearchParams } from "react-router-dom";
import { Loader } from "@components/Loader";
import { InlineError } from "@components/InlineError";
import {
  Entry,
  EntityInfoProps,
  EntityQueryResponse,
} from "./EntityInfo.types";
import { useErrorToast } from "@context/ErrorToastStore/ErrorToastStore";

export const EntityInfo = ({
  GET_ALL_QUERY,
  DELETE_MUTATION,
  UPDATE_MUTATION,
  queryName,
  queryOperation,
  deleteOperation,
  updateOperation,
  updateVariablesInput,
  entityName,
  entityNameSingular,
  FormComponent,
}: EntityInfoProps) => {
  const { entryId } = useParams();

  const [active, setActive] = useState("-1");

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const { setToastError } = useErrorToast();

  const { data, loading, refetch } = useQuery<EntityQueryResponse>(
    GET_ALL_QUERY,
    {
      variables: { id: entryId },
      onCompleted: (data) => {
        const firstEntry = data[queryOperation][0];

        if (firstEntry && (firstEntry.id === entryId || !entryId)) {
          const entryToOpen = searchParams.get("open") || firstEntry.id;
          setActive(entryToOpen);
        } else {
          setActive(entryId || "-1");
        }
      },
      onError: (err) => {
        setError(err.message);
      },
    },
  );

  const [deleteEntry] = useMutation<unknown, { id: string }>(DELETE_MUTATION, {
    variables: {
      id: entryId!,
    },
    onError: (err) => {
      const response = err.graphQLErrors[0].extensions.response as {
        message?: string[];
      };

      if (response && typeof response === "object" && "message" in response) {
        setToastError(
          (response.message && response.message[0]) || "Something went wrong",
        );
      }
    },
    updateQueries: {
      [queryName]: (prevResult, options) => {
        if (options.mutationResult.data) {
          return {
            [queryOperation]: prevResult[queryOperation].filter(
              (entry: Entry) => entry.id !== entryId,
            ),
          };
        }
        return prevResult;
      },
    },
  });

  const [updateEntry] = useMutation<unknown, { id: string }>(UPDATE_MUTATION, {
    onError: (err) => {
      const response = err.graphQLErrors[0].extensions.response as {
        message?: string[];
      };

      if (response && typeof response === "object" && "message" in response) {
        setToastError(
          (response.message && response.message[0]) || "Something went wrong",
        );
      }
    },
    updateQueries: {
      [queryName]: (
        prevResult: {
          [key: typeof queryOperation]: Entry[];
        },
        {
          mutationResult,
        }: {
          mutationResult: FetchResult<
            any,
            Record<string, any>,
            Record<string, any>
          >;
        },
      ) => {
        return {
          [queryOperation]: prevResult[queryOperation].map((entry: Entry) => {
            if (entry.id === entryId) {
              return {
                entry,
                ...mutationResult.data[updateOperation],
              };
            }

            return entry;
          }),
        };
      },
    },
  });

  useEffect(() => {
    if (active !== "-1") {
      navigate(active);
    }
  }, [active, navigate]);

  const handleActive = (activeId: string) => {
    setActive(activeId);
  };

  const handleTryAgain = () => {
    refetch();
  };

  const handleEntryDelete = (id: string) => {
    if (active === id) {
      navigate(`${ROUTE.ENTITIES}/${entityName}`);
    } else {
      navigate(`${ROUTE.ENTITIES}/${entityName}?open=${active}`);
    }
    deleteEntry({
      variables: { id },
      optimisticResponse: {
        [deleteOperation]: {
          affected: 1,
        },
      },
    });
  };

  const handleInfoFormSubmit = (data: Entry) => {
    const variables = {
      id: entryId!,
      [entityNameSingular]: {} as Entry,
    };

    const target = variables[entityNameSingular];

    updateVariablesInput.forEach((variable) => {
      if (variable in data && isEntry(target) && isKeyOfEntry(data, variable)) {
        target[variable] = data[variable];
      }
    });

    updateEntry({ variables });

    function isEntry(input: string | Entry): input is Entry {
      if (typeof variables[entityNameSingular] === "object") return true;

      return false;
    }

    function isKeyOfEntry(
      data: Entry,
      input: string | number | symbol,
    ): input is keyof Entry {
      return input in data ? true : false;
    }
  };

  const handleCancel = () => {
    navigate(ROUTE.ENTITIES);
  };

  return (
    <WrapperDiv>
      {loading ? (
        <Loader />
      ) : error ? (
        <InlineError message={error} tryAgainFn={handleTryAgain}></InlineError>
      ) : (
        <>
          <div className="sidebar">
            {data &&
              data[queryOperation] &&
              data[queryOperation].map((entry: Entry, index: number) => {
                return (
                  <div
                    className={active === entry.id ? "active" : ""}
                    key={entry.id}
                    onClick={() => handleActive(entry.id)}
                  >
                    <InfoItem
                      name={entry.name}
                      id={entry.id}
                      onDelete={handleEntryDelete}
                    />
                  </div>
                );
              })}
            <StyledButtonWrapper>
              <Button>
                <AddIcon />
              </Button>
            </StyledButtonWrapper>
          </div>
          {active !== "-1" && data && (
            <FormComponent
              input={
                data[queryOperation].find(({ id }) => id === active) ||
                ({} as Entry)
              }
              onSubmit={handleInfoFormSubmit}
              onCancel={handleCancel}
            />
          )}
        </>
      )}
    </WrapperDiv>
  );
};
