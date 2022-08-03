import { FilterList } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { TableHeadItemProps } from "./TableHeadItem.types";

export const TableHeadItem = ({
  isSortedBy,
  onClick,
  name,
  itemName,
  xs,
  isSortable,
  sortAsc,
}: TableHeadItemProps) => {
  return (
    <Grid item xs={xs} container justifyContent="center" alignItems="center">
      <Typography textAlign="center">{name}</Typography>
      {isSortable && (
        <FilterList
          className={isSortedBy && sortAsc ? "active" : ""}
          onClick={() => onClick(itemName)}
        />
      )}
    </Grid>
  );
};
