export interface Form {
  children: React.ReactNode;
  onChange?: (formValues: Record<string, string>) => void;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}