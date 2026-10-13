import type { LabelHTMLAttributes, ReactNode } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

export default function Label({ children, ...props }: LabelProps) {
  return <label {...props}>{children}</label>;
}
