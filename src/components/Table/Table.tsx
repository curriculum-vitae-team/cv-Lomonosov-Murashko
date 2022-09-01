import React, { useCallback, useState } from "react";
import { AbstractEntity, TableProps } from "./Table.types";
import { TableHead as TableHeadComponent } from "./components/TableHead";
import { TableRow as TableRowComponent } from "./components/TableRow";
import { StyledGrid, StyledNewEntryButton } from "./Table.styles";
import { byColumn } from "./helpers/byColumn";
import { TableRowItem } from "./components/TableRowItem";
import { IEntryData } from "@interfaces/IEntryData";
import { SearchBox } from "@components/SearchBox";

export function createTable<T extends AbstractEntity>(): React.ComponentType<
  TableProps<T>
> {
  return Table;
}

export function Table({
  items,
  head,
  onDelete,
  onCreate,
  redirectButtonText,
  deleteButtonText,
  entryType,
  showNewEntryButton,
}: TableProps) {
  const [sortBy, setSortBy] = useState(head[0].columnKey);
  const [isSortAsc, setIsSortAsc] = useState(true);

  const [filter, setFilter] = useState("");

  const handleSortByChange = useCallback(
    (columnName: string) => {
      if (columnName === sortBy) {
        setIsSortAsc((prev) => !prev);
      } else {
        setSortBy(columnName);
        setIsSortAsc(true);
      }
    },
    [sortBy],
  );

  const handleNew: React.MouseEventHandler = (e) => {
    onCreate && onCreate();
  };

  const handleQuery = (query: string) => {
    setFilter(query);
  };

  return (
    <StyledGrid container>
      {showNewEntryButton && (
        <StyledNewEntryButton onClick={handleNew}>
          Add {entryType}
        </StyledNewEntryButton>
      )}

      <SearchBox queryValue={filter} onQuery={handleQuery} />

      <TableHeadComponent
        columns={head}
        sortBy={sortBy}
        sortAsc={isSortAsc}
        onSortByChange={handleSortByChange}
        gridXS={12 / head.length}
      />
      {[...items]
        .sort(byColumn<IEntryData>(sortBy, isSortAsc))
        .filter(
          filter
            ? (item) =>
                Object.values(item).some(
                  (key) => typeof key === "string" && key.startsWith(filter),
                )
            : (item) => item,
        )
        .map((item) => (
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
