import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from "@chakra-ui/react"
import Navbar from './Components/Navbar.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

<ChakraProvider>
      <BrowserRouter> <Navbar/>
    <App />
      
      </BrowserRouter>
    </ChakraProvider>
    

   
  </React.StrictMode>,
)
