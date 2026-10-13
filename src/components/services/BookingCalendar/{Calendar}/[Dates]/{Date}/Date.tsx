import { useEffect } from "react";
import AddEventsForm from "@/components/services/BookingCalendar/[Events]/forms/AddEventsForm";
import Event from "@/components/services/[Events]/{Event}/Event";
import { useEvents } from "@/lib/bookings/state/EventsContext";
import { getBookingEventsByDate } from "@/services/[BookingEvents]/queries/getBookingEventsByDate";

interface DateProps {
  selectedDate: Date | undefined;
}

function Date({ selectedDate }: DateProps) {
  const { EVENTS_events } = useEvents();
  const dateEvents = getBookingEventsByDate(EVENTS_events, selectedDate);

  useEffect(() => {
    console.log(selectedDate);
  }, [selectedDate]);

  return (
    <>
    <div className="p-4 border rounded">
      {selectedDate ? selectedDate.toDateString() : "Not Selected"}
      <AddEventsForm date={selectedDate} />
      <ul>
        {dateEvents.map((event, i) => (
          <Event key={i} event={event} />
        ))}
      </ul>
    </div>
    </>
  );
}

export default Date;