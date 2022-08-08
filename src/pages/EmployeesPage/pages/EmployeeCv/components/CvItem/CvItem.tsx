import { StyledDiv, StyledLink } from "./CvItem.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SyntheticEvent } from "react";
import { Typography } from "@mui/material";
import { CvItemProps } from "./CvItem.types";

export const CvItem = ({ id, name }: CvItemProps) => {
  // move outside
  const onDeleteHandler = (e: SyntheticEvent, id: string) => {
    e.preventDefault();
  };

  return (
    <StyledDiv>
      <StyledLink to={id}>
        <Typography>{name}</Typography>
        <DeleteOutlineIcon onClick={(e) => onDeleteHandler(e, id)} />
      </StyledLink>
    </StyledDiv>
  );
};
