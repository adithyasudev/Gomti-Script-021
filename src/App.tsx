import "./App.css";
import Services from "./Pages/Services";

import "./App.css";
import { ContactUs } from "./Pages/ContactUs";
import CareerPage from "./Pages/CareerPage";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import Portfolio from "./Pages/Portfolio";
import { Route, Routes } from "react-router";
import { About } from "./Pages/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
