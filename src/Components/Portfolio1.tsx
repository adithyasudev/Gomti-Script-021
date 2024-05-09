import React from 'react'
import Bluebox from './Bluebox'
import { Stack } from '@chakra-ui/react'

const Portfolio1 = () => {
  return (
    <>  
    <Stack spacing={6}>
    <div style={{backgroundImage: 'url(https://convextech.com/wp-content/uploads/2023/02/Portfolio.jpg)', backgroundSize: 'cover ', width: '100vw', height: '250px',margin:'100' } }>
   <Stack spacing={8} >
   <Bluebox />
    <h1>Portfolio</h1>
   </Stack>
   </div>
   <img src='https://convextech.com/wp-content/uploads/2024/03/FG-3-1024x277.png' style={{height:'45vh', marginLeft:'auto', marginRight:'auto', width:'80vw' } }></img>
    </Stack>
    </>
  )
}

export default Portfolio1
