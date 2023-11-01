import BookingForm from "../components/bookingForm/BookingForm";
import { useReducer } from "react";
const updateTimes = (state, action) => {
  if (action.type === "Monday")
    return { availableTimes: state.availableTimes.push("15:00") };
  if (action.type === "Tuesday")
    return { availableTimes: ["17:30", "18:50", "19:00", "20:00", "21:00"] };
  return state;
};
function BookingPage() {
  const initializeTimes = {
    availableTimes: ["17:30", "18:50", "19:00", "20:00", "21:00"],
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <div>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;
