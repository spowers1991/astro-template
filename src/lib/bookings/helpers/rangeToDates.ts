import type { DateRange } from "react-day-picker";

export function rangeToDates(range: DateRange | undefined): Date[] {
  if (!range?.from) return [];
  const end = range.to ?? range.from;
  const dates: Date[] = [];
  const current = new Date(range.from);
  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
}
