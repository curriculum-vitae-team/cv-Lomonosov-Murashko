import { useState } from "react";
import { WrapperDiv, StyledButtonWrapper } from "./EmployeeCv.styles";
import { CvItem } from "./components/CvItem";
import { ICV } from "@interfaces/ICV";
import { Outlet, useNavigate, useParams } from "react-router";
import { cvsMock } from "@mock/cvs";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_USER_CVS } from "@graphql/User/User.queries";
import { UserCVEntry, UserCvsData } from "@graphql/User/User.interface";
import { Cv } from "@graphql/Cv/Cv.interface";

export const EmployeeCv = () => {
  const { employeeId } = useParams();

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const { data: userData } = useQuery<UserCvsData>(GET_USER_CVS, {
    variables: { id: employeeId },
    onCompleted: (data) => {
      const firstCv = data.user.cvs[0];

      if (firstCv) {
        setActive(firstCv.id);
        navigate(firstCv.id);
      }

      setLoading(false);
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const [active, setActive] = useState("-1");

  const navigate = useNavigate();

  const handleActive = (activeId: string) => {
    setActive(activeId);
  };

  return (
    <WrapperDiv>
      {loading ? (
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
                    <CvItem name={cv.name} id={cv.id} />
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
