import { TableEntry } from "@/constants/table";

export type TableProps = {
  items: Item[];
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

export type Item = {
  [x: string]: string | number;
  id: string;
};
