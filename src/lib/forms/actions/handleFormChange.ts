export const handleFormChange = (e: React.FormEvent<HTMLFormElement>, onChange: (formValues: Record<string, string>) => void ) => {
    if (!onChange || undefined) return;

    const form = e.currentTarget;
    const formData = new FormData(form);

    const values: Record<string, string> = {};
    formData.forEach((value, key) => {
      values[key] = String(value);
    });

    onChange(values);
  };