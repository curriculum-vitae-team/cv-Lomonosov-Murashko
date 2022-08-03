import { StyledDiv, StyledLink } from "./CvItem.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SyntheticEvent } from "react";

import { cvs } from "../../EmployeeCv";

type CvItemProps = {
  id: string;
  name: string;
};

export const CvItem = ({ id, name }: CvItemProps) => {
  // move outside
  const onDeleteHandler = (e: SyntheticEvent, id: string) => {
    e.preventDefault();
    cvs.filter((cv: any) => cv.id !== id);
  };

  return (
    <StyledDiv>
      <StyledLink to={id}>
        <span>{name}</span>
        <DeleteOutlineIcon onClick={(e) => onDeleteHandler(e, id)} />
      </StyledLink>
    </StyledDiv>
  );
};
