import type { SessionData } from "@/lib/astro/sessions/types/SessionData";
import { setSessionStore } from "@/lib/astro/sessions/store/@actions/set/setSessionStore";
import { useSessionStore } from "@/lib/astro/sessions/store/hooks/react/useSessionStore";

export default function Counter() {

  const sessionEntry = {
    name: "count",
    value: { count: 0 },
  } satisfies SessionData<{ count: number }>;

  const [session, setSession] = useSessionStore(sessionEntry.value);

  return (

    <button
      className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
      onClick={() => {
        setSession((prev) => {
          const newValue = { count: prev.store.count + 1 };
          setSessionStore(
            { 
              ...sessionEntry, 
              value: newValue 
            }
          );
          return { store: newValue };
        });

      }}
    >
      Clicked {session.store.count} {session.store.count === 1 ? "time" : "times"}
    </button>
  );
}
