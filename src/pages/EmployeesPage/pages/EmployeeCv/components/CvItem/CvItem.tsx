import { StyledDiv, StyledLink } from "./CvItem.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SyntheticEvent, useState } from "react";
import { Typography } from "@mui/material";
import { CvItemProps } from "./CvItem.types";

export const CvItem = ({ id, name, onDelete }: CvItemProps) => {
  // move outside

  const onDeleteHandler = (e: SyntheticEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(id);
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
