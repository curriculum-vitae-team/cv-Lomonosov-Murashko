import { createTable } from "@components/Table/Table";
import { AbstractEntity } from "@components/Table/Table.types";
import { styled } from "@mui/system";
import { Table } from "../Table";

export function createStyledTable<T extends AbstractEntity>() {
  return styled(createTable<T>())({
    display: "flex",
    marginTop: "1em",
    padding: "1em",
    borderRadius: "5px",
    "& svg": {
      fontSize: "1em",
      margin: "0.5em 0 0 0.3em",
      transition: "transform 0.4s ease-in",
    },
    "& svg:hover": {
      cursor: "pointer",
    },
    "& > div": {
      padding: "0 0.5em",
    },
    "& svg.active": {
      transform: "rotate(-180deg)",
    },
  });
}
