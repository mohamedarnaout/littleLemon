import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import "./sass/main.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookingPage from "./Pages/BookingPage";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
