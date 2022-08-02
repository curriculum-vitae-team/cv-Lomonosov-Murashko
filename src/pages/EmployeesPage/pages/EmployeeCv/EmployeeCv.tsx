import { useState } from "react";
import { WrapperDiv } from "./EmployeeCv.styles";
import { CvItem } from "./components/CvItem";
import { ICV } from "@/interfaces/ICV";

export const cvs = [
  {
    id: "1",
    name: "cv 1",
    description: "sdc",
  },
  {
    id: "2",
    name: "cv 2",
    description: "sdc",
  },
  {
    id: "3",
    name: "cv 3",
    description: "sdc",
  },

  {
    id: "4",
    name: "cv 4",
    description: "sdc",
  },
];

export const EmployeeCv = () => {
  // const [selectedTab, setSelectedTab] = useState<number>(0);
  const [active, setActive] = useState<number>(-1);

  // const handleChange = (e: React.SyntheticEvent, val: number) => {
  //   setSelectedTab(val);
  // };

  const handleActive = (activeId: number) => {
    setActive(activeId);
  };

  return (
    <WrapperDiv>
      <div className="cvsSidebar">
        {cvs.map((cv: ICV, index: number) => {
          return (
            <div
              className={active === Number(cv.id) - 1 ? "active" : ""}
              key={cv.id}
              onClick={() => handleActive(index)}
            >
              <CvItem name={cv.name} id={cv.id} />
            </div>
          );
        })}
      </div>
      <div className="cvsContent">content</div>
    </WrapperDiv>
  );
};
