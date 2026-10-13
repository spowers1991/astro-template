import type { BookingEvent } from "@/services/[BookingEvents]/{BookingEvent}/types/BookingEvent";
import { sampleCinemas } from "@/services/[Cinemas]/data/cinemas";
import { sampleMovies } from "@/services/[Movies]/data/movies";

interface EventProps {
  event: BookingEvent;
  showDate?: boolean;
}

function Event({ event, showDate = false }: EventProps) {
  const movie = sampleMovies.find((m) => m.id === event.movieId);
  const cinema = sampleCinemas.find((c) => c.id === event.cinemaId);

  return (
    <li>
      {movie?.slug ? <a href={`/movies/${movie.slug}/`}>{movie.name}</a> : movie?.name} at{" "}
      {cinema?.url ? (
        <a href={cinema.url} target="_blank" rel="noopener noreferrer">{cinema.name}</a>
      ) : (
        cinema?.name
      )}{" "}
      — {showDate && `${event.date} `}{event.time}
    </li>
  );
}

export default Event;
