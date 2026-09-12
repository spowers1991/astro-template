export function getSessionStore<T>(key: string): T | undefined {
    if (typeof window === "undefined") return undefined;

    const storedValue = sessionStorage.getItem(key);
    if (!storedValue) return undefined;

    try {
        return JSON.parse(storedValue) as T;
    } catch {
        return undefined;
    }
}