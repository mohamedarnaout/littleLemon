import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [num, setNum] = useState("");
  const [occasion, setOccasion] = useState("");
  function initializeTimes() {
    return availableTimes.map((availableTime, index) => (
      <option key={index} value={availableTime}>
        {availableTime}
      </option>
    ));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setDate("");
    setTime("");
    setNum("");
    setOccasion("");

    console.log(date);
    console.log(time);
    console.log(num);
    console.log(occasion);
    console.log("Form Submitted!");
  };
  return (
    <div>
      <h1>Book Now</h1>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            dispatch({ type: "Monday" });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        >
          <option value="" disabled selected>
            Select your time
          </option>
          {initializeTimes()}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="" disabled selected>
            Select your occasion
          </option>
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input
          disabled={!time || !date || !occasion || !num}
          type="submit"
          value="Make Your reservation"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}

export default BookingForm;
