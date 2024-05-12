//import React from 'react'


import { Stack } from "@chakra-ui/react"
import LandingPage from "../Components/LandingPage"
import { Main1 } from "../Components/Main1"
import { Main2 } from "../Components/Main2"
const Home = () => {

  return (
    <>
     <Stack spacing={10}>

     <LandingPage/>
      <Main1/>
      <Main2/>
     </Stack>
     
    </>
  )
}

export default Home
