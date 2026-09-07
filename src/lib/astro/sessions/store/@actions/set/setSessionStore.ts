import type { SessionData } from "@/lib/astro/sessions/types/SessionData";

export function setSessionStore<T>(key: string, value: SessionData<T>) {
    if (typeof window === "undefined") return;

    sessionStorage.setItem(key, JSON.stringify(value.value));
}