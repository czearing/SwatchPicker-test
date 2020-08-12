import { useControllableValue } from "@uifabric/react-hooks";
import { SwatchPickerState } from "./SwatchPicker.types";
/**
 * Adds state to the color picker state.
 */
export const useSwatchPickerState = (state: SwatchPickerState) => {
  // This is where state is managed.
  const [color, setColor] = useControllableValue(
    state.color,
    state.defaultColor || state.colors[0].color,
    state.onChange
  );
  state.color = color;
  state.onCellClick = (ev: MouseEvent) => {
    setColor((ev.target as HTMLElement).getAttribute("data-color"));
  };

  state.style = state.style || {};
  state.style.gridTemplateColumns = `repeat(${state.columnCount}, min-content)`;
  state.style.gridGap = state.gap;
};
