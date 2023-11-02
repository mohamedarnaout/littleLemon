import BookingForm from "../components/bookingForm/BookingForm";
import { useReducer } from "react";
const updateTimes = (availableTimes, action) => {
  if (action.type === "Monday")
    return { availableTimes: availableTimes.push("15:00") };
  return availableTimes;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [
    "17:30",
    "18:50",
    "19:00",
    "20:00",
    "21:00",
  ]);

  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;
