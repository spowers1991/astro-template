import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
      onClick={() => setCount((value) => value + 1)}
    >
      Clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
}
