import { HTMLAttributes } from "react";
import { SwatchCellProps } from "./SwatchCell.types";

export interface SwatchPickerProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  color?: string;
  defaultColor?: string;
  onChange?: (ev: Event, color: string) => void;

  colors: SwatchCellProps[];

  disabled?: boolean;
  circular?: boolean;
  cellSize?: string | number;
  columnCount?: number;
  gap?: number;

  cellSlot?: SwatchCellProps & { as?: React.ReactType };
}

export type SwatchPickerState = SwatchPickerProps & {
  onCellClick: (ev: MouseEvent) => void;
};

export const swatchPickerShorthandProps: (keyof SwatchPickerProps)[] = [
  "cellSlot"
];
