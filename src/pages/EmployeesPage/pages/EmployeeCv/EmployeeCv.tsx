import { useState } from "react";
import { WrapperDiv } from "./EmployeeCv.styles";
import { CvItem } from "./components/CvItem";
import { ICV } from "@interfaces/ICV";
import { Outlet, useParams } from "react-router";
import { cvs } from "@pages/CvsPage/CvsPage";

export const EmployeeCv = () => {
  // const [selectedTab, setSelectedTab] = useState<number>(0);

  const { cvId } = useParams();

  const [active, setActive] = useState<string>(cvId || "-1");

  // const handleChange = (e: React.SyntheticEvent, val: number) => {
  //   setSelectedTab(val);
  // };

  const handleActive = (activeId: string) => {
    setActive(activeId);
  };

  return (
    <WrapperDiv>
      <div className="cvsSidebar">
        {cvs.map((cv: ICV, index: number) => {
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
      </div>
      <Outlet />
    </WrapperDiv>
  );
};
