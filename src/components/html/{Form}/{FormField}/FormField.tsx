interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
}: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <label className="text-sm font-medium">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        autoComplete={"current-password"}
        className="border rounded p-2"
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}