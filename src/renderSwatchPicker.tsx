import * as React from "react";
import { getSlots } from "@fluentui/react-compose/lib/next";
import {
  SwatchPickerState,
  swatchPickerShorthandProps
} from "./SwatchPicker.types";
/**
 * Renders the color picker given state.
 */
export const renderSwatchPicker = (state: SwatchPickerState) => {
  const { slots, slotProps } = getSlots(state, swatchPickerShorthandProps);
  const { colors } = state;

  return (
    <slots.root {...slotProps.root}>
      {colors?.map((color) => (
        <slots.cellSlot
          {...color}
          disabled={state.disabled}
          circular={state.circular}
          size={state.cellSize}
          onClick={state.onCellClick}
          data-color={color.color}
          selected={color.color === state.color}
        />
      ))}
    </slots.root>
  );
};
