import { Grid, TableBody, TableHead } from "@mui/material";
import { useState } from "react";
import { TableProps } from "./Table.types";
import { TableHead as TableHeadComponent } from "./components/TableHead";
import { TableRow as TableRowComponent } from "../TableRow";
import { StyledGrid } from "./Table.styles";

export function Table<T extends { [x: string]: any; id: string }>({
  items,
  head,
  onDelete,
  redirectButtonText,
  deleteButtonText,
}: TableProps<T>) {
  const [sortBy, setSortBy] = useState(
    Object.getOwnPropertyNames(head[0]).find((el) => el !== "isSortable")!
  );
  const [sortAsc, setSortAsc] = useState(true);

  function byColumn<T>(column: keyof T, sortAsc: boolean) {
    if (sortAsc) {
      return (a: T, b: T) => (a[column] < b[column] ? -1 : 1);
    }

    return (a: T, b: T) => (b[column] < a[column] ? -1 : 1);
  }

  return (
    <StyledGrid container>
      <TableHeadComponent
        columns={head}
        sortBy={sortBy}
        sortAsc={sortAsc}
        onSortByChange={(columnName) => {
          if (columnName === sortBy) {
            setSortAsc((prev) => !prev);
          } else {
            setSortBy(columnName);
            setSortAsc(true);
          }
        }}
      />
      {[...items].sort(byColumn<T>(sortBy, sortAsc)).map((item) => (
        <TableRowComponent
          redirectButtonText={redirectButtonText}
          deleteButtonText={deleteButtonText}
          onDelete={onDelete}
          item={item}
          key={item.id}
        />
      ))}
    </StyledGrid>
  );
}
