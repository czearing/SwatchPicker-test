import * as React from "react";
import { SwatchCell } from "./SwatchCell";
import { makeClasses } from "@fluentui/react-compose/lib/next";
import * as styles from "./SwatchPicker.module.scss";
import { useSwatchPicker } from "./useSwatchPicker";
import { SwatchPickerProps } from "./SwatchPicker.types";

const useClasses = makeClasses(styles);

export const SwatchPicker = React.forwardRef<HTMLElement, SwatchPickerProps>(
  (props, ref) => {
    const { render, state } = useSwatchPicker(props, ref, {
      cellSlot: { as: SwatchCell }
    });

    useClasses(state);

    return render(state);
  }
);
