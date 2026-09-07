import { useEffect, useState } from "react";
import { setSessionStore } from "@/lib/astro/sessions/store/@actions/set/setSessionStore";
import { getSessionStore } from "@/lib/astro/sessions/store/@actions/get/getSessionStore";

export function useSessionStore(initial: { count: number }) {
  const [session, setSession] = useState({ store: initial });

  useEffect(() => {
    const storedData = getSessionStore<unknown>("count");

    const value =
      typeof storedData === "number"
        ? storedData
        : typeof storedData === "object" &&
            storedData !== null &&
            typeof (storedData as { count?: unknown }).count === "number"
          ? (storedData as { count: number }).count
          : undefined;

    if (value === undefined) return;

    const migratedData = { count: value };
    // legacy stored data was a bare number; rewrite it in the current shape
    if (typeof storedData === "number") {
      setSessionStore({ name: "count", value: migratedData });
    }
    setSession({ store: migratedData });
  }, []);

  return [session, setSession] as const;
}
