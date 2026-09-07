import { useEffect, useState } from "react";
import type { SessionData } from "@/lib/astro/sessions/types/SessionData";
import { setSessionStore } from "@/lib/astro/sessions/store/@actions/set/setSessionStore";
import { getSessionStore } from "@/lib/astro/sessions/store/@actions/get/getSessionStore";
import { createSessionEntry } from "@/lib/astro/sessions/store/@actions/create/createSessionEntry";

export default function Counter() {

  const sessionEntry = {
    name: "count",
    value: { count: 0 },
  } satisfies SessionData<{ count: number }>;

  const [data, setData] = useState(sessionEntry.value);

  useEffect(() => {
    const storedData = getSessionStore<unknown>("count");

    if (typeof storedData === "number") {
      const migratedData = { count: storedData };
      setSessionStore("count", { name: "count", value: migratedData });
      setData(migratedData);
      return;
    }

    if (
      storedData &&
      typeof storedData === "object" &&
      "count" in storedData &&
      typeof storedData.count === "number"
    ) {
      setData({ count: storedData.count });
    }
  }, []);

  return (
    <button
      className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
      onClick={() => {
        createSessionEntry(sessionEntry);
        setData((prev) => {
          const newValue = { count: prev.count + 1 };
          setSessionStore({ name: "count", value: newValue });
          return newValue;
        });
      }}
    >
      Clicked {data.count} {data.count === 1 ? "time" : "times"}
    </button>
  );
}
