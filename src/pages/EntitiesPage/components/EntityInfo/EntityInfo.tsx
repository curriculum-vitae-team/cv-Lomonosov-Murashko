import { useEffect, useState } from "react";
import { WrapperDiv, StyledButtonWrapper } from "./EntityInfo.styles";
import { InfoItem } from "@components/InfoItem";
import { Outlet, useNavigate, useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { ROUTE } from "@constants/route";
import { useSearchParams } from "react-router-dom";
import { Loader } from "@components/Loader";
import { InlineError } from "@components/InlineError";
import {
  Entry,
  EntityInfoProps,
  EntityQueryResponse,
} from "./EntityInfo.types";

export const EntityInfo = ({
  GET_ALL_QUERY,
  DELETE_MUTATION,
  UPDATE_MUTATION,
  queryName,
  queryOperation,
  deleteOperation,
  entityName,
  FormComponent,
}: EntityInfoProps) => {
  const { entryId } = useParams();

  const [active, setActive] = useState("-1");

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

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
      setError(err.message);
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
    variables: {
      id: entryId!,
    },
    onError: (err) => {
      setError(err.message);
    },
    updateQueries: {
      [queryName]: (prevResult, options) => {
        if (options.mutationResult.data) {
          return {
            [queryOperation]: prevResult[queryOperation].map((entry: Entry) => {
              if (
                entry.id === entryId &&
                typeof options.mutationResult.data === "object" &&
                queryOperation in options.mutationResult.data
              ) {
                return {
                  ...prevResult[queryOperation],
                  ...options.mutationResult.data[queryOperation],
                };
              }
            }),
          };
        }
        return prevResult;
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
    // call update mutation
    // update cache of all queried entities
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
              input={data[queryOperation].find(({ id }) => id === active) || {}}
            />
          )}
        </>
      )}
    </WrapperDiv>
  );
};
