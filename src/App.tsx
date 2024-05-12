



import './App.css'
import Services from './pages/Services'



import './App.css';
import { ContactUs } from './pages/ContactUs';
import CareerPage from './pages/CareerPage';
import Events from './pages/Events';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { Route, Routes } from 'react-router';
import { About } from './pages/About';
function App() {
  return (
    <>
<Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About />} />
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
