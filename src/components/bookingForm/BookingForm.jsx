import { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [num, setNum] = useState("");
  const [occasion, setOccasion] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    console.log(time);
    console.log(num);
    console.log(occasion);
    console.log("Form Submitted!");
  };
  return (
    <div>
      <form>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
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
