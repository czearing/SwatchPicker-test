export type SwatchCellProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
  selected?: boolean;
  size?: string | number;
  circular?: boolean;

  label?: string;
};
