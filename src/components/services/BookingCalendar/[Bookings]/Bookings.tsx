import Calendar from "../{Calendar}/Calendar.tsx";
import { EventsProvider } from "@/lib/bookings/state/EventsContext";

function Bookings() {
  return (
    <EventsProvider>
      <Calendar />
    </EventsProvider>
  );
}

export default Bookings;