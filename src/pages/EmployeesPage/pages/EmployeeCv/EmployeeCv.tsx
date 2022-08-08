import { useState } from "react";
import { WrapperDiv, StyledButtonWrapper } from "./EmployeeCv.styles";
import { CvItem } from "./components/CvItem";
import { ICV } from "@interfaces/ICV";
import { Outlet, useParams } from "react-router";
import { cvsMock } from "@mock/cvs";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

export const EmployeeCv = () => {
  const { cvId } = useParams();
  const [active, setActive] = useState<string>(cvId || "-1");

  const handleActive = (activeId: string) => {
    setActive(activeId);
  };

  return (
    <WrapperDiv>
      <div className="sidebar">
        {cvsMock.map((cv: ICV, index: number) => {
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
    </WrapperDiv>
  );
};
