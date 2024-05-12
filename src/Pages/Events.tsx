// import React from 'react'
import Event1 from '../Components/Event1'
import EventCard from '../Components/Event2'
import { Stack } from '@chakra-ui/react'

const Events = () => {
  return (
    <>
    <Stack spacing={10}>
    <Event1 />
    <EventCard />
   </Stack>
    </>
  )
}

export default Events
