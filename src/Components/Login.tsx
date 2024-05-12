import React, { useRef } from 'react'

import { Button, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react"
import { useDispatch } from 'react-redux';
import { loginAdmin, loginUser } from '../redux/asyncFunctions';


//typescript
interface LoginDetail{
  email:string;
  password:string;
}



const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  let dispatch =useDispatch()
  const EmailInput = useRef<HTMLInputElement>(null);
  const  password = useRef<HTMLInputElement>(null);

  //object creation

  // let userDetails:userDetail={ email="" , password=""}
  let userDetails: LoginDetail = { email: "", password: "" };

 const handellogin=()=>{
  if(EmailInput.current && EmailInput.current.value && password.current && password.current.value){
   console.log(EmailInput.current.value);
   console.log(password.current.value);

  userDetails={email:EmailInput.current.value, password:password.current.value}
   
  dispatch(loginUser(userDetails));
  }
   
 }

 const handelAdminlogin=()=>{
  if(EmailInput.current && EmailInput.current.value && password.current && password.current.value){
    console.log(EmailInput.current.value);
    console.log(password.current.value);
 
   userDetails={email:EmailInput.current.value, password:password.current.value}
   dispatch(loginAdmin(userDetails));
  }
 }

  return (
    <>
      <Stack spacing={5}>
      {/* <Email /> */}
      
     <label>Enter your Email</label>
      <Input  placeholder='Email'  ref={EmailInput}/>
     

      {/* <PasswordInput /> */}
      <Stack spacing={1}>
      <label>Enter your password</label>
      <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'} 
        placeholder='Enter password' ref={password}
      />
        <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
    </Stack>
      <Button colorScheme='teal' variant='solid' onClick={handellogin}>
       LOGIN
    </Button>
  <Button colorScheme='teal' variant='outline ' >
    Forgot Password
  </Button>
  <p>Loin as <span onClick={handelAdminlogin}>admin</span></p>
  </Stack>
    </>
  )
}

export default Login
