import { EventsProvider, useEvents } from "@/lib/bookings/state/EventsContext";
import Event from "@/components/services/BookingCalendar/[Events]/{Event}/Event";

function EventsList() {
  const { EVENTS_events } = useEvents();

  if (EVENTS_events.length === 0) {
    return <p>No events yet.</p>;
  }

  const sorted = [...EVENTS_events].sort((a, b) =>
    `${a.date} ${a.time}`.localeCompare(`${b.date} ${b.time}`)
  );

  return (
    <ul>
      {sorted.map((event, i) => (
        <Event key={i} event={event} showDate />
      ))}
    </ul>
  );
}

function Events() {
  return (
    <EventsProvider>
      <EventsList />
    </EventsProvider>
  );
}

export default Events;
