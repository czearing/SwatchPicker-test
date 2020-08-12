import * as React from "react";
import "./styles.css";
import { SwatchPicker } from "./SwatchPicker";

export default function App() {
  const [color, setColor] = React.useState("blue");
  const swatchRef = React.useRef<HTMLElement | null>(null);

  return (
    <div className="App">
      Color is: {color}
      <SwatchPicker
        ref={swatchRef}
        color="pink"
        cellSize={30}
        columnCount={4}
        gap={1}
        onChange={(ev, newColor) => setColor(newColor)}
        colors={[
          { color: "blue", label: "Blue", "aria-posinset": 0 },
          { color: "green", label: "Blue" },
          { color: "red", label: "Blue" },
          { color: "pink", label: "Blue" },
          { color: "orange", label: "Blue" },
          { color: "yellow", label: "Blue" }
        ]}
      />
      <button onClick={() => swatchRef.current?.focus()}>
        Focus the picker
      </button>
    </div>
  );
}
