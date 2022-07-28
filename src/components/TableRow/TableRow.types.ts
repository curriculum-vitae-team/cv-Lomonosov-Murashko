export type TableRowProps<T extends { id: string }> = {
  item: T;
  redirectButtonText: string;
  deleteButtonText: string;
  onDelete: (id: string) => void;
};
