


// import './App.css'
// import Bluebox from './Components/Bluebox'
// import { ContactUs1 } from './Components/ContactUs1'

import './App.css'
import Navbar from './Components/Navbar'
import AdminDashboard from './pages/AdminDashboard'
import Services from './pages/Services'


// function App() {
  

//   return (
//     <>
//       <p>Hello</p>
//   <ContactUs1 />
//     </>
//   )
// }

// export default App
// src/App.tsx
import './App.css';
import { ContactUs } from './pages/ContactUs';
import CareerPage from './pages/CareerPage';
import Events from './pages/Events';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router';
function App() {
  return (
    <>
<Routes>
<Route path="./" />
<Route path="./" />
<Route path="./" />
<Route path="./" />
<Route path="./" />
</Routes>
    </>
  )
}

export default App;
