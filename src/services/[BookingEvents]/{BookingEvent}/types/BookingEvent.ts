export const BOOKING_EVENT_FIELDS = ["cinemaId", "movieId", "date", "time"] as const;

// date is a local YYYY-MM-DD key (see toDateKey)
export type BookingEvent = Record<(typeof BOOKING_EVENT_FIELDS)[number], string>;
