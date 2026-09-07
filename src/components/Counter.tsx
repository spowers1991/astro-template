import { useState } from "react";

interface CounterProps {
  id?: string;
  initialCount?: number;
}

export default function Counter({ id = "count", initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount);
  const [draftCount, setDraftCount] = useState(String(initialCount));

  const updateCount = (value: number) => {
    setCount(value);
    setDraftCount(String(value));
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        id={`${id}-decrement`}
        type="button"
        className="rounded bg-cyan-200 px-4 py-2 font-semibold text-slate-950"
        onClick={() => updateCount(count - 1)}
      >
        -1
      </button>

      <p id={`${id}-value`} className="font-semibold" aria-live="polite">
        Count: {count}
      </p>

      <button
        id={`${id}-increment`}
        type="button"
        className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
        onClick={() => updateCount(count + 1)}
      >
        +1
      </button>

      <label className="sr-only" htmlFor={`${id}-input`}>
        Set count
      </label>
      <input
        id={`${id}-input`}
        className="w-24 rounded border border-slate-300 px-3 py-2 text-slate-950"
        type="number"
        value={draftCount}
        onChange={(event) => setDraftCount(event.target.value)}
      />

      <button
        id={`${id}-set`}
        type="button"
        className="rounded bg-slate-900 px-4 py-2 font-semibold text-white"
        onClick={() => {
          const nextCount = Number(draftCount);
          if (Number.isFinite(nextCount)) {
            updateCount(nextCount);
          }
        }}
      >
        Set
      </button>
    </div>
  );
}
