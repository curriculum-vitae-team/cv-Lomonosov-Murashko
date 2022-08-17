import React, { useCallback, useState } from "react";
import { AbstractEntity, TableProps } from "./Table.types";
import { TableHead as TableHeadComponent } from "./components/TableHead";
import { TableRow as TableRowComponent } from "./components/TableRow";
import { StyledGrid } from "./Table.styles";
import { Button } from "@mui/material";
import { byColumn } from "./helpers/byColumn";
import { TableRowItem } from "./components/TableRowItem";
import { IEntryData } from "@interfaces/IEntryData";

export function createTable<T extends AbstractEntity>(): React.ComponentType<
  TableProps<T>
> {
  return Table;
}

export function Table({
  items,
  head,
  onDelete,
  redirectButtonText,
  deleteButtonText,
  entryType,
  showNewEntryButton,
}: TableProps) {
  const [sortBy, setSortBy] = useState(head[0].columnKey);
  const [sortAsc, setSortAsc] = useState(true);

  const handleSortByChange = useCallback(
    (columnName: string) => {
      if (columnName === sortBy) {
        setSortAsc((prev) => !prev);
      } else {
        setSortBy(columnName);
        setSortAsc(true);
      }
    },
    [sortBy],
  );

  const handleNew: React.MouseEventHandler = (e) => {
    // TODO: Navigate to creation
  };

  return (
    <StyledGrid container>
      {showNewEntryButton && (
        <Button onClick={handleNew}>Add {entryType}</Button>
      )}

      <TableHeadComponent
        columns={head}
        sortBy={sortBy}
        sortAsc={sortAsc}
        onSortByChange={handleSortByChange}
        gridXS={12 / head.length}
      />
      {[...items].sort(byColumn<IEntryData>(sortBy, sortAsc)).map((item) => (
        <TableRowComponent
          redirectButtonText={redirectButtonText}
          deleteButtonText={deleteButtonText}
          onDelete={onDelete}
          key={item.id}
          id={item.id}
        >
          {head.map(({ columnKey }) => (
            <TableRowItem
              key={columnKey}
              value={item[columnKey]}
              gridXS={12 / head.length}
            />
          ))}
        </TableRowComponent>
      ))}
    </StyledGrid>
  );
}
