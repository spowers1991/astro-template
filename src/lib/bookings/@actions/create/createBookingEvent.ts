import { BOOKING_EVENT_FIELDS, type BookingEvent } from "@/services/[BookingEvents]/{BookingEvent}/types/BookingEvent";

export const createBookingEvent = (form: HTMLFormElement): BookingEvent => {
  const data = new FormData(form);
  return Object.fromEntries(
    BOOKING_EVENT_FIELDS.map((field) => [field, String(data.get(field) ?? "")])
  ) as BookingEvent;
};
