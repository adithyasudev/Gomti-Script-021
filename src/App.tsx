

// import './App.css'
// import Bluebox from './Components/Bluebox'
// import { ContactUs1 } from './Components/ContactUs1'

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
import React from 'react';
import './App.css';
import Contactus1 from './Components/ContactUs1';
import { Main1 } from './Components/Main1';
import { Main2 } from './Components/Main2';
function App() {
  return (
    <div className="App">
      <Contactus1 />
      <Main1 />
      <Main2 />
    </div>
  );
}

export default App;