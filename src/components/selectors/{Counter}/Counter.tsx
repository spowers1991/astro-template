import type { SessionData } from "@/lib/sessions/types/SessionData";
import { useSessionStore } from "@/lib/sessions/store/hooks/react/useSessionStore";
import { setSessionStore } from "@/lib/sessions/store/@actions/set/setSessionStore";

export default function Counter() {

  const sessionEntry = {
    name: "count",
    value: { count: 0 },
  } satisfies SessionData<{ count: number }>;

  const [count, setCount] = useSessionStore(sessionEntry.name, sessionEntry.value);

  return (

    <button
      className="rounded bg-cyan-400 px-4 py-2 font-semibold text-slate-950"
      onClick={() => {
        setCount(prev => {
          const newValue = { count: prev.store.count + 1 };
          return { store: newValue };
        });
        setSessionStore({ name: sessionEntry.name, value: { count: count.store.count + 1 } });
      }}
    >
      Clicked {count.store.count} {count.store.count === 1 ? "time" : "times"}
    </button>
  );
}
