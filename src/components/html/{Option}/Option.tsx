import type { OptionHTMLAttributes, ReactNode } from "react";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children?: ReactNode;
}

export default function Option({ children, ...props }: OptionProps) {
  return <option {...props}>{children}</option>;
}
