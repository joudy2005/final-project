import React from "react";
import BookingForm from "./BookingForm"; // Ensure the path is correct

const Booking = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <div>
      <h2>Book a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
};

export default Booking;
