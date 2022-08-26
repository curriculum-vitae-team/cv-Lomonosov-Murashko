import { StyledDiv, StyledLink } from "./InfoItem.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SyntheticEvent, useState } from "react";
import { Typography } from "@mui/material";
import { CvItemProps } from "./InfoItem.types";

export const InfoItem = ({ id, name, onDelete }: CvItemProps) => {
  // move outside

  const handleDelete: React.MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <StyledDiv>
      <StyledLink to={id}>
        <Typography>{name}</Typography>
        <DeleteOutlineIcon onClick={handleDelete} />
      </StyledLink>
    </StyledDiv>
  );
};
