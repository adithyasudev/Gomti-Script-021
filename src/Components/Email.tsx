import { Input, Stack } from '@chakra-ui/react'
import React from 'react'

const Email = () => {
  return (
   <Stack spacing={1}>
    <label>Enter your Email</label>
    <Input  placeholder='Email' />
   </Stack>
  )
}

export default Email
