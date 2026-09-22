import { useEffect, useState } from "react";
import  { Session } from "@/lib/sessions/Session";

export function useSessionStore<T>(id: string, initial: T) {
  const [session, setSession] = useState<{ store: T }>({ store: initial });

  useEffect(() => {
      const storedData = Session.getStore(id);

      if (storedData === undefined || storedData === null) return;

      setSession({ store: storedData as T });
      
    }, [id]);

  return [session, setSession] as const;
}
