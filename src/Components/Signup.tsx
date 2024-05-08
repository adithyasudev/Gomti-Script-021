import React from 'react'
import { Button, Input, InputGroup, InputLeftAddon, Stack } from '@chakra-ui/react'
import PasswordInput from './Password'
import Email from './Email'
const Signup = () => {
  return (
   <>
    <Stack spacing={5}>
    <Stack spacing={1}>
    <label>Enter your Full-Name</label>
    <Input  placeholder='Enter your full Name' />
    </Stack>
    <Email />
    <Stack spacing={1}>
        <label>Phone-No</label>
    <InputGroup>
    <InputLeftAddon>+91</InputLeftAddon>
    <Input type='tel' placeholder='phone number' />
    </InputGroup>
    </Stack>
    <PasswordInput />
  
    <Button colorScheme='teal' variant='solid'>
    SIGNUP
    </Button>
   </Stack>

   </>
  )
}

export default Signup
