import "./App.css";

import { BrowserRouter as  Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const ContactUs = React.lazy(() => import('./Pages/ContactUs'));
const CareerPage = React.lazy(() => import('./Pages/CareerPage'));
const Services = React.lazy(() => import('./Pages/Services'));
const Portfolio = React.lazy(() => import('./Pages/Portfolio'));
const Events = React.lazy(() => import('./Pages/Events'));

const LoadingFallback = () => <div>Loading...</div>;
import Events from "./Pages/Events";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import CareerPage from "./Pages/CareerPage";
import ContactUs from "./Pages/ContactUs";
// import About from "./Pages/About";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
<Route path="/" element={<Home />}/>
{/* <Route path="./about" /> */}
<Route path="/contactus" element={<ContactUs/>}/>
<Route path="/career" element={<CareerPage/>}/>
<Route path="/services" element={<Services/>} />
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/events" element={<Events/>} />
</Routes>
  );
}

export default App;
