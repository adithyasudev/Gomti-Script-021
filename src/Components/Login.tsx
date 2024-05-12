import React, { useRef } from 'react'

import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input, InputGroup, InputRightElement, Stack, useToast } from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
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

  const loggedinUser = useSelector(state=>state.user.isAuthenticated); 


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
  {loggedinUser && (
        <Alert
          status='success'
          pos='absolute'
          bottom='100px'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Thanks for submitting your application. Our team will get back to you soon.
          </AlertDescription>
        </Alert>
      )}
    </>
  )
}

export default Login
