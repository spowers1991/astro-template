import type { BookingEvent } from "@/services/[BookingEvents]/{BookingEvent}/types/BookingEvent";
import { toDateKey } from "@/lib/bookings/helpers/toDateKey";

export const getBookingEventsByDate = (
  events: BookingEvent[],
  date: Date | undefined
): BookingEvent[] => {
  const key = toDateKey(date);
  return key ? events.filter((event) => event.date === key) : [];
};
