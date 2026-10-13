import React, { useEffect } from "react";
import Date from "./{Date}/Date.tsx";

interface DatesProps {
  selectedDates: (Date | undefined)[]
}

function Dates({ selectedDates }: DatesProps) {

  useEffect(() => {
    console.log(selectedDates);
  }, [selectedDates]);
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {selectedDates.map((selected, index) => (
          <Date key={index} selectedDate={selected} />
        ))}
      </div>
    </>
  );
}

export default Dates;