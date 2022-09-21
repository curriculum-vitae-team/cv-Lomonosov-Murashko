import { useMutation, useQuery } from "@apollo/client";
import { useErrorToast } from "@context/ErrorToastStore/ErrorToastStore";
import { WrapperDiv, StyledButtonWrapper } from "../../EntitiesPage.styles";
import { ROUTE } from "@constants/route";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { Loader } from "@components/Loader";
import { InlineError } from "@components/InlineError";
import { Button } from "@mui/material";
import { DeleteEntityEntryInput } from "@graphql/Entity/Entity.interface";
import { Department } from "@interfaces/department.interface";
import { InfoItem } from "@components/InfoItem";
import { InfoForm } from "../SkillsPage/components/InfoForm";
import { DeletePositionOutput, GetPositionsData, Position, UpdatePositionInput } from "@graphql/Entity/Position/Position.interface";
import { deletePositionCacheUpdate } from "@graphql/Entity/Position/Position.cache";
import { DELETE_POSITION, GET_POSITIONS, UPDATE_POSITION } from "@graphql/Entity/Position/Position.queries";

export const PositionsPage = () => {
  const { entryId } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();
  const { setToastError } = useErrorToast();
  const [active, setActive] = useState("-1");

  const { data, loading, refetch } = useQuery<GetPositionsData>(
    GET_POSITIONS,
    {
      variables: { id: entryId },
      onCompleted: (data) => {
        const firstEntry = data.positions[0];

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

  const [deleteEntry] = useMutation<
    DeletePositionOutput,
    DeleteEntityEntryInput
  >(DELETE_POSITION, {
    variables: {
      id: entryId!,
    },
    onError: (err) => {
      const response = err.graphQLErrors[0].extensions.response as {
        message?: string[];
      };

      if (response) {
        setToastError(
          (response.message && response.message[0]) || "Something went wrong",
        );
      }
    },
  });

  const [updateEntry] = useMutation<Position, UpdatePositionInput>(
    UPDATE_POSITION,
    {
      onError: (err) => {
        const response = err.graphQLErrors[0].extensions.response as {
          message?: string[];
        };

        setToastError(
          (response?.message && response.message[0]) || "Something went wrong",
        );
      },
    },
  );

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
      navigate(`${ROUTE.ENTITIES}/positions`);
    }
    deleteEntry({
      variables: { id },
      optimisticResponse: {
        deletePosition: {
          affected: 1,
        },
      },
      update: deletePositionCacheUpdate(id),
    });
  };

  const handleInfoFormSubmit = (data: Department) => {
    updateEntry({
      variables: {
        id: entryId!,
        position: {
          name: data.name,
        },
      },
    });
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
            {data?.positions?.map((entry: Position, index: number) => {
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
            <InfoForm
              input={
                data.positions.find(({ id }) => id === active) ||
                ({} as Department)
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
