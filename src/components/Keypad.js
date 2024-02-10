import React from "react";
import puzzleData from "../data/db";

export default function Keypad({ usedKeys }) {
  const letters = puzzleData.letters;

  return (
    <div className="keypad">
      {letters.map((l) => {
        const color = usedKeys[l.key];
        return (
          <div key={l.key} className={color}>
            {l.key}
          </div>
        );
      })}
    </div>
  );
}
