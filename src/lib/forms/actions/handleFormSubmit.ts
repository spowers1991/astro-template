import type { Dispatch, SetStateAction } from "react";

// Generic helper for form submission
export const handleFormSubmit = (
  action: (email: string, password: string) => Promise<{ success: boolean; message: string }>,
  formValues: Record<string, string>,
  setStatus: Dispatch<SetStateAction<"idle" | "success" | "error" | "loading">>,
  setMessage: Dispatch<SetStateAction<string | null>>,
  statusMessages?: Record<"idle" | "success" | "error" | "loading", string | null>,
) => {
  return async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(statusMessages?.loading ?? null);
    setStatus("loading");

    try {
      const result = await action(formValues.email, formValues.password);

      if (!result.success) {
        setMessage(result.message || statusMessages?.error || null);
        setStatus("error");
        return;
      }

      setMessage(result.message || statusMessages?.success || null);
      setStatus("success");

    } catch (err: unknown) {
      let message = err instanceof Error ? err.message : "An unexpected error occurred.";
      setMessage(message || statusMessages?.error || null);
      setStatus("error");
      if (err instanceof Error) {
        message = err.message;
        setMessage(err.message || statusMessages?.error || null);
        setStatus("error");
      }
      return { success: false, message };
    }
  };
};
