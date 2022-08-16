import { StyledDiv, StyledLink } from "./CvItem.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SyntheticEvent, useState } from "react";
import { Typography } from "@mui/material";
import { CvItemProps } from "./CvItem.types";
import { useMutation } from "@apollo/client";
import { UNBIND_CV } from "@graphql/Cv/Cv.queries";
import { UnbindCvInput, UnbindCvOutput } from "@graphql/Cv/Cv.interface";
import { useParams } from "react-router";
import { UserCvsData } from "@graphql/User/User.interface";

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
