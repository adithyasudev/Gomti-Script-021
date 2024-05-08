import { Button, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"
import React from "react"

const PasswordInput=()=>{
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Stack spacing={1}>
      <label>Enter your password</label>
    <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'} 
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </Stack>
  )
}
export default PasswordInput