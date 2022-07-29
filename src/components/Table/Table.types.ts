import { TableEntry } from "../../constants/table";

export type TableProps<T extends { [x: string]: any; id: string }> = {
  items: T[];
  head: TableHead;
  redirectButtonText: string;
  deleteButtonText: string;
  entryType: TableEntry;
  onDelete: (id: string) => void;
};

export type TableHead = {
  columnKey: string;
  columnName: string;
  isSortable: boolean;
}[];
