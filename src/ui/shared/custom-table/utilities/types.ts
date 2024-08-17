export type TColumn = {
  label: string;
  isFilterable?: boolean;
  aligned?: "left" | "center" | "right";
  cellCount?: number;
  columnName: string;
  id: number;
};
