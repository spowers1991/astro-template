import React from "react";
import Form from "@/components/html/{Form}/Form";
import FormField from "@/components/html/{Form}/{FormField}/FormField";


function BookingForm() {
  return (
    <Form>
        <FormField
          label="Name"
          name="name"
        />
    </Form>
  );
}

export default BookingForm;