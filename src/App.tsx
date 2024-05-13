import "./App.css";
// import { BrowserRouter as  Route, Routes } from "react-router-dom";

import Events from "./Pages/Events";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import CareerPage from "./Pages/CareerPage";
import ContactUs from "./Pages/ContactUs"
import Home from "./Pages/Home";
import { Route, Routes } from "react-router";
import About from "./Pages/About";

function App() {
  return (
    <Routes>
<Route path="/" element={<Home />}/>
<Route path="./about"  element={<About />} />
<Route path="/contactus" element={<ContactUs/>}/>
<Route path="/career" element={<CareerPage/>}/>
<Route path="/services" element={<Services/>} />
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/events" element={<Events/>} />
</Routes>
  );
}

export default App;
