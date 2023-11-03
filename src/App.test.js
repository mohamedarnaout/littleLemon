import { render, screen, fireEvent } from "@testing-library/react";
import BookingPage from "./Pages/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});
test("the function is working", () => {
  const initializeTimes = jest.fn();
  render(<BookingPage initializeTimes={initializeTimes} />);
  const running = fireEvent.initializeTimes();
  expect(running).toHaveBeenCalledWith([
    "17:30",
    "18:50",
    "19:00",
    "20:00",
    "21:00",
  ]);
});
