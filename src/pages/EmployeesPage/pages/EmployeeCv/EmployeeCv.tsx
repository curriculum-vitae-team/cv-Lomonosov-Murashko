import { useCallback, useEffect, useState } from "react";
import { WrapperDiv, StyledButtonWrapper } from "./EmployeeCv.styles";
import { CvItem } from "./components/CvItem";
import { ICV } from "@interfaces/ICV";
import { Outlet, useNavigate, useParams } from "react-router";
import { cvsMock } from "@mock/cvs";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { GET_USER_CVS } from "@graphql/User/User.queries";
import { UserCVEntry, UserCvsData } from "@graphql/User/User.interface";
import { Cv, UnbindCvInput, UnbindCvOutput } from "@graphql/Cv/Cv.interface";
import { GET_CV_INFO, UNBIND_CV } from "@graphql/Cv/Cv.queries";
import { ROUTE } from "@constants/route";
import { useSearchParams } from "react-router-dom";

export const EmployeeCv = () => {
  const { employeeId } = useParams();
  const { cvId } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState("");

  const [searchParams] = useSearchParams();

  const { data: userData } = useQuery<UserCvsData>(GET_USER_CVS, {
    variables: { id: employeeId },
    onCompleted: (data) => {
      const firstCv = data.user.cvs[0];

      if (firstCv && (firstCv.id === cvId || !cvId)) {
        const cvToOpen = searchParams.get("opencv") || firstCv.id;
        setActive(cvToOpen);
        navigate(cvToOpen);
      } else {
        setActive(cvId || "-1");
      }

      setIsLoading(false);
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

  const [active, setActive] = useState("-1");

  const navigate = useNavigate();

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
      {isLoading ? (
        <>loader</>
      ) : error ? (
        <>{error}</>
      ) : (
        userData?.user.cvs && (
          <>
            <div className="sidebar">
              {userData.user.cvs.map((cv: UserCVEntry, index: number) => {
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
