export type TableProps<T extends { [x: string]: any; id: string }> = {
  items: T[];
  head: TableHead;
  redirectButtonText: string;
  deleteButtonText: string;
  onDelete: (id: string) => void;
};

export type TableHead = {
  columnKey: string;
  columnName: string;
  isSortable: boolean;
}[];
