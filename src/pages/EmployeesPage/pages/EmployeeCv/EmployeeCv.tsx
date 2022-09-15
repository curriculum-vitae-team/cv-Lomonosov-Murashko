import { useState } from "react";
import { WrapperDiv, StyledButtonWrapper } from "./EmployeeCv.styles";
import { InfoItem as CvItem } from "@src/components/InfoItem";
import { Outlet, useNavigate, useParams } from "react-router";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_CVS } from "@graphql/User/User.queries";
import { UnbindCvInput, UnbindCvOutput } from "@graphql/Cv/Cv.interface";
import { UserCVEntry, UserCvsData } from "./EmployeeCv.types";
import { UNBIND_CV } from "@graphql/Cv/Cv.queries";
import { ROUTE } from "@constants/route";
import { useSearchParams } from "react-router-dom";
import { Loader } from "@components/Loader";
import { InlineError } from "@components/InlineError";

export const EmployeeCv = () => {
  const { employeeId } = useParams();
  const { cvId } = useParams();
  const [error, setError] = useState("");
  const [active, setActive] = useState("-1");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const {
    data: userData,
    loading,
    refetch,
  } = useQuery<UserCvsData>(GET_USER_CVS, {
    variables: { id: employeeId },
    onCompleted: (data) => {
      const firstCv = data.user.cvs[0];

      if (firstCv && (firstCv.id === cvId || !cvId)) {
        const cvToOpen = searchParams.get("opencv") || firstCv.id;
        setActive(cvToOpen);
      } else {
        setActive(cvId || "-1");
      }
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const [unbindCv] = useMutation<UnbindCvOutput, UnbindCvInput>(UNBIND_CV, {
    onError: (err) => {
      setError(err.message);
    },
    updateQueries: {
      GetUserCvs: (prevResult, options) => {
        if (options.mutationResult.data) {
          const { id } = options.mutationResult.data.unbindCv;
          return {
            user: {
              cvs: prevResult.user.cvs.filter(
                (cv: { id: string; name: string }) => cv.id !== id,
              ),
            },
          };
        }
        return prevResult;
      },
    },
  });

  const handleActive = (activeId: string) => {
    setActive(activeId);
  };

  const handleCvDelete = (id: string) => {
    if (active === id) {
      navigate(`${ROUTE.EMPLOYEES}/${employeeId}/cv/`);
    } else {
      navigate(`${ROUTE.EMPLOYEES}/${employeeId}/cv?opencv=${active}`);
    }
    unbindCv({
      variables: { id },
      optimisticResponse: {
        unbindCv: {
          id,
        },
      },
    });
  };

  return (
    <WrapperDiv>
      {loading ? (
        <Loader />
      ) : error ? (
        <InlineError
          message={error}
          tryAgainFn={() => {
            refetch();
          }}
        ></InlineError>
      ) : (
        userData?.user.cvs && (
          <>
            <div className="sidebar">
              {userData.user.cvs.map((cv) => {
                return (
                  <div
                    className={active === cv.id ? "active" : ""}
                    key={cv.id}
                    onClick={() => handleActive(cv.id)}
                  >
                    <CvItem
                      name={cv.name}
                      id={cv.id}
                      onDelete={handleCvDelete}
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
            <Outlet />
          </>
        )
      )}
    </WrapperDiv>
  );
};
