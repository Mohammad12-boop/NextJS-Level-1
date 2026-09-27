"use client";

import { useState } from "react";

export default function Counter({ initialCount }: { initialCount: number }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="demo-controls">
      <button type="button" onClick={() => setCount((value) => value - 1)}>Decrease</button>
      <output aria-live="polite" aria-atomic="true">Count: {count}</output>
      <button type="button" onClick={() => setCount((value) => value + 1)}>Increase</button>
    </div>
  );
}
