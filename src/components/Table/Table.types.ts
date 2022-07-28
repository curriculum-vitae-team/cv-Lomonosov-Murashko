export type TableProps<T extends { [x: string]: any; id: string }> = {
  items: T[];
  head: ({ [K in keyof T]?: T[K] } & { isSortable: boolean })[];
  redirectButtonText: string;
  deleteButtonText: string;
  onDelete: (id: string) => void;
};
