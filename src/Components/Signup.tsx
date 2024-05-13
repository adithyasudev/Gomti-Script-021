import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import {
  Stack,
  Input,
  InputGroup,
  Button,
  InputLeftAddon,
  InputRightElement,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  useDisclosure,
} from '@chakra-ui/react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { User } from '../redux/types';

//inteface for type script

interface UserDetail {
  name: string;
  email: string;
  number: string;
  password: string;
}
const SERVICE_ID = 'service_vtkteyf'; // Replace with your service ID
const TEMPLATE_ID = 'template_41bpzgi'; // Replace with your template ID
const PUBLIC_KEY = 'OyR3SnqdB3Kz5EPeN'; // Replace with your public key
interface EmailData {
  to_name: string;
  to_email: string;
  message: string; // Include message property with a string type
}

const Signup = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const Fullname = useRef<HTMLInputElement>(null);
  const EmailInput = useRef<HTMLInputElement>(null);
  const phoneno = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  //handel Signup
  const handelSignup = async () => {
    if (
      Fullname.current &&
      Fullname.current.value &&
      EmailInput.current &&
      EmailInput.current.value &&
      phoneno.current &&
      phoneno.current.value &&
      password.current &&
      password.current.value
    ) {
      const userData: UserDetail = {
        name: Fullname.current!.value,
        number: phoneno.current!.value,
        email: EmailInput.current!.value,
        password: password.current!.value,
      };
      const singnuser: User = {
        email: EmailInput.current!.value,
        password: password.current!.value,
      };
      try {
        const response = await axios.post('https://gomti-script-021.onrender.com/user', userData);
        console.log('User data posted successfully:', response.data);
        // Clear the form fields after successful submission
        onOpen();
        dispatch({ type: 'LOGIN_SUCCESS', payload: singnuser });
        const emailData = {
          to_name: userData.name,
          to_email: userData.email,
          // Removed placeholder, use your template content here
          message: '', // Your template content will be used here
        };
        await sendConfirmationEmail(emailData);
        resetForm();
      } catch (error) {
        console.error('Error posting user data:', error);
      }
    }
  };

  const sendConfirmationEmail = async (emailData: EmailData) => {
    try {
      // Create a new HTML form element
      const form = document.createElement('form');

      // Add input fields to the form
      Object.entries(emailData).forEach(([key, value]) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });

      // Send the form using emailjs
      const response = await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);

      console.log('Email sent successfully:', response.status);
    } catch (error) {
      console.error('Error sending confirmation email:', error);
    }
  };

  const resetForm = () => {
    if (Fullname.current) Fullname.current.value = '';
    if (EmailInput.current) EmailInput.current.value = '';
    if (phoneno.current) phoneno.current.value = '';
    if (password.current) password.current.value = '';
  };

  return (
    <>
      <Stack spacing={5}>
        <Stack spacing={1}>
          <label>Enter your Full-Name</label>
          <Input placeholder="Enter your full Name" ref={Fullname} />
        </Stack>
        {/* <Email /> */}
        <label>Enter your Email</label>
        <Input placeholder="Email" ref={EmailInput} />
        <Stack spacing={1}>
          <label>Phone-No</label>
          <InputGroup>
            <InputLeftAddon>+91</InputLeftAddon>
            <Input type="tel" placeholder="phone number" ref={phoneno} />
          </InputGroup>
        </Stack>
        {/* <PasswordInput /> */}
        <Stack spacing={1}>
          <label>Enter your password</label>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              ref={password}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </Stack>
        <Button colorScheme="teal" variant="solid" onClick={handelSignup}>
          SIGNUP
        </Button>
      </Stack>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              User Signed Up Sucessfully User Signedup
            </AlertDialogHeader>

            <AlertDialogBody>Your Account is Created Sucessfully</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="purple" onClick={onClose} ml={3}>
                Done
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Signup;