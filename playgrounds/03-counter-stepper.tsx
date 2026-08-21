"use client";

import { useState } from "react";

export default function CounterStepper() {
  const [count, setCount] = useState(0);

  // TODO: Make the + and − buttons update count.
  // TODO: Prevent count from dropping below 0.
  // TODO: Make Reset return count to 0.
  const onCount = (action: string) => {
    if (action === "increment") {
      setCount((prev) => prev + 1);
    }
    if (action === "decrement") {
      setCount((prev) => prev - 1);
    }
    if (action === "reset") {
      setCount(0);
    }
  };

  return (
    <main>
      <h1>Counter stepper</h1>
      <p className="walkthrough">
        Walkthrough: I need one number in state, then event handlers that update
        it.
      </p>
      <p>Current count: {count}</p>
      <div className="button-row">
        <button
          type="button"
          disabled={count === 0}
          onClick={() => onCount("decrement")}
        >
          −
        </button>
        <button type="button" onClick={() => onCount("reset")}>
          Reset
        </button>
        <button type="button" onClick={() => onCount("increment")}>
          +
        </button>
      </div>
    </main>
  );
}
