import { StyledDiv, StyledLink } from "./CvItem.styles";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Typography } from "@mui/material";
import { CvItemProps } from "./CvItem.types";
import { withAdminAccess } from "@src/hoc/withAdminAccess";

const DeleteOutlineIconWithAdminAccess = withAdminAccess(DeleteOutlineIcon);

export const CvItem = ({ id, name, onDelete }: CvItemProps) => {
  const handleDelete: React.MouseEventHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <StyledDiv>
      <StyledLink to={id}>
        <Typography>{name}</Typography>
        <DeleteOutlineIconWithAdminAccess onClick={handleDelete} />
      </StyledLink>
    </StyledDiv>
  );
};
