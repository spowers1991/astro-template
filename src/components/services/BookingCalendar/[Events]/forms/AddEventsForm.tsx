import Form from "@/components/html/{Form}/Form";
import FormField from "@/components/html/{Form}/{FormField}/FormField";
import Select from "@/components/html/{Select}/Select";
import Option from "@/components/html/{Option}/Option";
import Button from "@/components/html/{Button}/Button";
import Label from "@/components/html/{Label}/Label";
import { createBookingEvent } from "@/lib/bookings/@actions/create/createBookingEvent";
import { useEvents } from "@/lib/bookings/state/EventsContext";
import { toDateKey } from "@/lib/bookings/helpers/toDateKey";
import { sampleCinemas } from "@/services/[Cinemas]/data/cinemas";
import { sampleMovies } from "@/services/[Movies]/data/movies";

interface AddEventsFormProps {
  date: Date | undefined;
}

function AddEventsForm({ date }: AddEventsFormProps) {
  const { EVENTS_setEvents } = useEvents();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const event = createBookingEvent(form);
    EVENTS_setEvents((prev) => [...prev, event]);
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label className="text-sm font-medium">Cinema</Label>
      <Select name="cinemaId" required className="border rounded p-2 mb-4 block">
        {sampleCinemas.map((cinema) => (
          <Option key={cinema.id} value={cinema.id}>
            {cinema.name} ({cinema.city})
          </Option>
        ))}
      </Select>

      <Label className="text-sm font-medium">Movie</Label>
      <Select name="movieId" required className="border rounded p-2 mb-4 block">
        {sampleMovies.map((movie) => (
          <Option key={movie.id} value={movie.id}>
            {movie.name}
          </Option>
        ))}
      </Select>

      <input type="hidden" name="date" value={toDateKey(date)} />

      <FormField label="Time" name="time" type="time" />

      <Button type="submit">Add Event</Button>
    </Form>
  );
}

export default AddEventsForm;
