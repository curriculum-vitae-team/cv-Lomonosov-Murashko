import { ExpandMore } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { TableHeadItem } from "../TableHeadItem";
import { StyledDiv, StyledGrid } from "./TableHead.styles";
import { TableHeadProps } from "./TableHead.types";

export function TableHead<T extends { isSortable: boolean }>({
  columns,
  sortBy,
  onSortByChange,
  sortAsc,
}: TableHeadProps<T>) {
  const accordionButtonXS = 0;
  const gridXS = (12 - accordionButtonXS) / columns.length;

  return (
    <StyledDiv>
      <StyledGrid container>
        {columns.map((col, i) => {
          const key = Object.getOwnPropertyNames(col).find(
            (el) => el !== "isSortable"
          ) as keyof typeof col;
          const value = col[key] as unknown as string;
          return (
            <TableHeadItem
              isSortedBy={sortBy === key}
              sortAsc={sortAsc}
              isSortable={col.isSortable}
              onClick={onSortByChange}
              name={value}
              itemName={key as string}
              xs={gridXS}
              key={i}
            />
          );
        })}
      </StyledGrid>
      <ExpandMore sx={{ opacity: 0 }} />
    </StyledDiv>
  );
}
