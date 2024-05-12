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


function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/career" element={<CareerPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Suspense>
  );
}

export default App;