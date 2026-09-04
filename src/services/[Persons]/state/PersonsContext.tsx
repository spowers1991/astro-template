"use client";

import React, { createContext, useContext, useState } from "react";
import type { Person } from "../{Person}/types/Person";

interface PersonsContext {
  PERSONS_persons: Person[];
  PERSONS_setPersons: React.Dispatch<React.SetStateAction<Person[]>>;
  PERSONS_GridHidden: { [movieId: string]: boolean };
  PERSONS_setGridHidden: React.Dispatch<React.SetStateAction<{ [movieId: string]: boolean }>>;
  PERSONS_togglePersonsGrid: (movieId: string) => void;
}

const PersonsContext = createContext<PersonsContext | undefined>(undefined);

export function PersonsProvider({
  initialPersons,
  children,
}: {
  initialPersons: Person[];
  children: React.ReactNode;
}) {
  const [PERSONS_persons, PERSONS_setPersons] = useState<Person[]>(initialPersons || []);
  
  const [PERSONS_GridHidden, PERSONS_setGridHidden] = useState<{ [movieId: string]: boolean }>({});

  const PERSONS_togglePersonsGrid = (movieId: string) => {
    PERSONS_setGridHidden((prev) => ({ ...prev, [movieId]: !prev[movieId] }));
  };

  return (
    <PersonsContext.Provider value={{ PERSONS_persons, PERSONS_setPersons, PERSONS_GridHidden, PERSONS_setGridHidden, PERSONS_togglePersonsGrid }}>
      {children}
    </PersonsContext.Provider>
  );
}

export function usePersons() {
  const context = useContext(PersonsContext);
  if (!context) {
    throw new Error("usePersons must be used within a PersonsProvider");
  }
  return context;
}
