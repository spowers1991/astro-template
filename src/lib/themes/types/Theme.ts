import type { ThemeStyles } from "./ThemeStyles";

export interface Theme {
  id: string; // unique identifier
  name: string;
  font: string;
  styles: ThemeStyles;
}
