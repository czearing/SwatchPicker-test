import * as React from "react";
import { makeClasses } from "@fluentui/react-compose/lib/next";
import { useButton, ButtonProps } from "@fluentui/react-button";
import * as styles from "./SwatchCell.module.scss";
import { SwatchCellProps } from "./SwatchCell.types";

const useClasses = makeClasses(styles);

export const SwatchCell = React.forwardRef<HTMLButtonElement, SwatchCellProps>(
  (props, ref) => {
    const { render, state } = useButton((props as unknown) as ButtonProps, ref);

    // styling here.
    useClasses(state);

    const { size = 30 } = state;

    state.style = state.style || {};
    state.style.background = props.color || "red";
    state.style.width = size;
    state.style.height = size;

    return render(state);
  }
);
