import BookingForm from "../components/bookingForm/BookingForm";
import { useReducer } from "react";

const updateTimes = (availableTimes, action) => {
  if (action.type === "Monday") return [...availableTimes, "15:00"];
  return availableTimes.push("15:00");
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [
    "17:30",
    "18:50",
    "19:00",
    "20:00",
    "21:00",
  ]);
  function initializeTimes() {
    return availableTimes.map((availableTime, index) => (
      <option key={index} value={availableTime}>
        {availableTime}
      </option>
    ));
  }
  return (
    <div>
      <BookingForm dispatch={dispatch} initializeTimes={initializeTimes} />
    </div>
  );
}

export default BookingPage;
