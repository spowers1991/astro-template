import { handleFormChange } from "@/lib/forms/actions/handleFormChange";
import type { Form } from "@/lib/forms/types/Form";

export default function Form({ children, onChange, onSubmit, className }: Form) {
  
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    handleFormChange(e, onChange ?? (() => {}));
  };

  return (
    <form
      onSubmit={onSubmit}
      onChange={handleChange}
      className={className}
    >
      {children}
    </form>
  );
}