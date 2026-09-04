"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Movie } from "../{Movie}/types/Movie";

interface MoviesContextValue {
  MOVIES_movies: Movie[];
  MOVIES_setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
}

const MoviesContext = createContext<MoviesContextValue | undefined>(undefined);

export function MoviesProvider({
  initialMovies,
  children,
}: {
  initialMovies: Movie[];
  children: React.ReactNode;
}) {
  const [MOVIES_movies, MOVIES_setMovies] = useState<Movie[]>(
    initialMovies || []
  );

  useEffect(() => {
  }, [MOVIES_movies]);

  return (
    <MoviesContext.Provider value={{ MOVIES_movies, MOVIES_setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMovies must be used within a MoviesProvider");
  }
  return context;
}
