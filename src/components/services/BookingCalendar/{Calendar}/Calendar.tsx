import { useState } from "react";
import { DayPicker, type DateRange } from "react-day-picker";
import { rangeToDates } from "@/lib/bookings/helpers/rangeToDates";
import Dates from "../{Calendar}/[Dates]/Dates.tsx";
import Button from "@/components/html/{Button}/Button.tsx";

import "react-day-picker/style.css";

function Calendar() {
  
  const handleSelect = (date: DateRange | undefined) => {
    setSelected(date);
  };

  const [selected, setSelected] = useState<DateRange | undefined>();

  return (
    <>
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={handleSelect}
      />
      
      <Button onClick={() => setSelected(undefined)}>
        Clear Selection
      </Button>
      
      <Dates selectedDates={rangeToDates(selected)} />
    </>
  );
}

export default Calendar;