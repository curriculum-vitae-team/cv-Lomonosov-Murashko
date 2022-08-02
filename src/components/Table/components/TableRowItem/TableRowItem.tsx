import { Grid, Typography } from "@mui/material";
import { TableRowItemProps } from "./TableRowItem.types";

export const TableRowItem = ({ value, gridXS }: TableRowItemProps) => {
  return (
    <Grid item xs={gridXS}>
      <Typography>{value}</Typography>
    </Grid>
  );
};
