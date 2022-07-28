export type TableHeadProps<T> = {
  columns: T[];
  sortBy: string;
  sortAsc: boolean;
  onSortByChange: (columnName: string) => void;
};
