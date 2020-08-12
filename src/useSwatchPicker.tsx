import * as React from "react";
import {
  mergeProps,
  resolveShorthandProps
} from "@fluentui/react-compose/lib/next";
import { FocusZone } from "@fluentui/react-focus";
import { renderSwatchPicker } from "./renderSwatchPicker";
import { useSwatchPickerState } from "./useSwatchPickerState";
import {
  SwatchPickerProps,
  SwatchPickerState,
  swatchPickerShorthandProps
} from "./SwatchPicker.types";
export const useSwatchPicker = (
  props: SwatchPickerProps,
  ref: React.Ref<HTMLElement>,
  defaultProps?: SwatchPickerProps
) => {
  const state: SwatchPickerState = (mergeProps(
    // This is where defaults go.
    {
      as: FocusZone,
      ref,
      cellSlot: { as: "span" },
      columnCount: 99,
      gap: 8,
      size: 20
    },
    defaultProps,
    resolveShorthandProps(props, swatchPickerShorthandProps)
  ) as unknown) as SwatchPickerState;

  useSwatchPickerState(state);

  return {
    state,
    render: renderSwatchPicker
  };
};
