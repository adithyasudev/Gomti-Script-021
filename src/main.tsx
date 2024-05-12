//import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";


import { ChakraProvider } from "@chakra-ui/react";        
import Navbar from "./Components/Navbar.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import store from "./redux/reduxStore.ts";
import Footer from "./Components/Footer.tsx";
// import { ContactUs } from "./Pages/ContactUs.tsx";
// import CareerPage from "./Pages/CareerPage.tsx";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          {" "}
          <Navbar />
          <App />
        </BrowserRouter>
        <Footer />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
