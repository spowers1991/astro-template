import type { SessionData } from "@/lib/astro/sessions/types/SessionData";
import { getSessionStore } from "@/lib/astro/sessions/store/@actions/get/getSessionStore";
import { setSessionStore } from "@/lib/astro/sessions/store/@actions/set/setSessionStore";

// Seeds the entry only if it isn't already present in sessionStorage
export function createSessionEntry<T>(entry: SessionData<T>) {
    if (getSessionStore(entry.name) !== undefined) return;
    setSessionStore(entry);
}
