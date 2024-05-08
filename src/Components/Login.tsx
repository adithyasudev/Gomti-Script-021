import React from 'react'
import PasswordInput from './Password'
import Email from './Email'
import { Button, Stack } from '@chakra-ui/react'

const Login = () => {
  return (
    <>
      <Stack spacing={5}>
      <Email />
      <PasswordInput />
      <Button colorScheme='teal' variant='solid'>
       LOGIN
    </Button>
  <Button colorScheme='teal' variant='outline'>
    Forgot Password
  </Button>
      </Stack>
    </>
  )
}

export default Login
