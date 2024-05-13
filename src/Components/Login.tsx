import React, { useRef, useEffect, useState } from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { useDispatch, useSelector } from 'react-redux';
import { jsonAdmin, jsonUser } from '../redux/asyncFunctions';
import Style from './Sartik.module.css';
import { Store } from '../redux/types';
import { loginFailure, loginSuccess } from '../redux/reducers';

//typescript
interface LoginDetail {
  email: string;
  password: string;
}

const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  let dispatch = useDispatch();
  const EmailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const [userData, setUserData] = useState<jsonUser[]|null>(null);
  const [adminData, setAdminData] = useState<jsonAdmin[]|null>(null); 

  const loggedinUser = useSelector((state: Store) => state.user.isAuthenticated);

  const handellogin = () => {
    if (EmailInput.current && EmailInput.current.value && passwordInput.current && passwordInput.current.value&&userData) {
      const userDetails: LoginDetail = { email: EmailInput.current.value, password: passwordInput.current.value };
      let valid = userData.some(user => user.email === userDetails.email && user.password === userDetails.password);
      if(valid){
        dispatch(loginSuccess(userDetails));
      }else{
        dispatch(loginFailure('Invalid email or password'));
      }
    }
  };

  const handelAdminlogin = () => {
    if (EmailInput.current && EmailInput.current.value && passwordInput.current && passwordInput.current.value&&adminData) {
      const userDetails: LoginDetail = { email: EmailInput.current.value, password: passwordInput.current.value };
      let valid = adminData.some(user => user.email === userDetails.email && user.password === userDetails.password);
      if(valid){
        dispatch(loginSuccess(userDetails));
      }else{
        dispatch(loginFailure('Invalid email or password'));
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Call your async function to fetch user data
        const response1 = await fetch('https://gomti-script-021.onrender.com/user');
        const response2 = await fetch('https://gomti-script-021.onrender.com/admin');
        const usData = await response1.json();
        const adData = await response2.json();
        setUserData(usData);
        setAdminData(adData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData(); // Call fetchData when component mounts
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <>
      <Stack spacing={5}>
        <label>Enter your Email</label>
        <Input placeholder='Email' ref={EmailInput} />

        <Stack spacing={1}>
          <label>Enter your password</label>
          <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password' ref={passwordInput}
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
        <Button colorScheme='teal' variant='outline'>
          Forgot Password
        </Button>
        <p style={{ display: 'flex', justifyContent: 'center' }}>
          Login as <span onClick={handelAdminlogin} style={{ color: 'blue', marginLeft: '0.2vw' }} className={Style.hoveradmin}>admin</span>
        </p>
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
  );
};

export default Login;