import { SearchBox } from "@components/SearchBox";
import { Stack } from "@mui/system";
import { ListItemType, ListProps } from "./List.types";
import {
  List as MuiList,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

export const List = ({ items }: ListProps) => {
  const [filter, setFilter] = useState("");

  const filterFn = useCallback(
    (item: ListItemType) => item.name.startsWith(filter),
    [filter],
  );

  const handleFilter = useCallback((query: string) => {
    setFilter(query);
  }, []);

  return (
    <Stack>
      <SearchBox onQuery={handleFilter} queryValue={filter} />
      <MuiList>
        {items.filter(filterFn).map((item) => (
          <ListItem key={item.id} disablePadding>
            {item.link ? (
              <ListItemButton component={Link} to={item.link}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ) : (
              <ListItemText primary={item.name} />
            )}
          </ListItem>
        ))}
      </MuiList>
    </Stack>
  );
};
