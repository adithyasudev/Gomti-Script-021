


// import './App.css'
// import Bluebox from './Components/Bluebox'
// import { ContactUs1 } from './Components/ContactUs1'


import { Route, Routes } from "react-router";
// import AdminDashboard from "./Pages/AdminDashboard";
import Events from "./Pages/Events";
import Portfolio from "./Pages/Portfolio";
import { ContactUs } from "./Pages/ContactUs";
import CareerPage from "./Pages/CareerPage";
import Services from "./Pages/Services";
import Home from "./Pages/Home";




function App() {
  return (
    <>
    <Routes>
<Route path="/" element={<Home />}/>
{/* <Route path="./about" /> */}
<Route path="/contactus" element={<ContactUs/>}/>
<Route path="/career" element={<CareerPage/>}/>
<Route path="/services" element={<Services/>} />
<Route path="/portfolio" element={<Portfolio/>} />
<Route path="/events" element={<Events/>} />
</Routes>

    </>
  )
}

export default App;
