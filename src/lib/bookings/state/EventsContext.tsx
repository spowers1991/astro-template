"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import type { BookingEvent } from "@/services/[BookingEvents]/{BookingEvent}/types/BookingEvent";

const STORAGE_KEY = "booking-events";

interface EventsContextValue {
  EVENTS_events: BookingEvent[];
  EVENTS_setEvents: React.Dispatch<React.SetStateAction<BookingEvent[]>>;
}

const EventsContext = createContext<EventsContextValue | undefined>(undefined);

export function EventsProvider({
  initialEvents = [],
  children,
}: {
  initialEvents?: BookingEvent[];
  children: React.ReactNode;
}) {
  const [EVENTS_events, EVENTS_setEvents] =
    useState<BookingEvent[]>(initialEvents);
  const [loaded, setLoaded] = useState(false);

  // Load after mount so server and client markup match
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) EVENTS_setEvents(JSON.parse(stored));
    } catch {
      // ignore unreadable storage
    }
    setLoaded(true);
  }, []);

  // Wait for the load so the initial empty list doesn't overwrite saved events
  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(EVENTS_events));
  }, [EVENTS_events, loaded]);

  return (
    <EventsContext.Provider value={{ EVENTS_events, EVENTS_setEvents }}>
      {children}
    </EventsContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEvents must be used within a EventsProvider");
  }
  return context;
}
