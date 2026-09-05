import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = sessionStorage.getItem("count");
    if (storedCount) {
      setCount(Number(storedCount));
    }
  }, []);

  return (
    <button
      className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
      onClick={() => {
        setCount((value) => {
          const newValue = value + 1;
          sessionStorage.setItem("count", newValue.toString());
          return newValue;
        });
      }}
    >
      Clicked {count} {count === 1 ? "time" : "times"}
    </button>
  );
}
