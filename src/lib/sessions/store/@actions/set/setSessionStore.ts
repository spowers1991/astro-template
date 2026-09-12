import type { SessionData } from "@/lib/sessions/types/SessionData";

export function setSessionStore<T>(entry: SessionData<T>) {
    if (typeof window === "undefined") return;

    sessionStorage.setItem(entry.name, JSON.stringify(entry.value));
}