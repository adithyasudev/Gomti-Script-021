  import React, { useRef } from 'react'
  
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
  } from '@chakra-ui/react'
  import axios from 'axios';



  //inteface for type script
  
  interface UserDetail{
    name:string;
    email:string;
    number:string;
    password:string;
  }



  const Signup = () => {

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef =useRef<HTMLButtonElement>(null);


    const Fullname = useRef<HTMLInputElement>(null);
    const EmailInput = useRef<HTMLInputElement>(null);   
    const phoneno = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
  


    //handel Signup
    const handelSignup=async ()=>{
      if(Fullname.current && Fullname.current.value && EmailInput.current && EmailInput.current.value && phoneno.current && phoneno.current.value && password.current && password.current.value){
        // console.log(Fullname.current.value);
        // console.log( EmailInput.current.value);
        // console.log( phoneno.current.value);
        // console.log( password.current.value);      

        const userData: UserDetail = {
          name: Fullname.current!.value,
          number: phoneno.current!.value,
          email: EmailInput.current!.value,        
          password: password.current!.value,
      }
      try {
        const response = await axios.post('https://gomti-script-021.onrender.com/user', userData)
        console.log('User data posted successfully:', response.data);
        // Clear the form fields after successful submission
        onOpen();
        resetForm();

      } catch (error) {
        console.error('Error posting user data:', error);
      }
    }
  

    }
    const resetForm = () => {
      Fullname.current!.value = '';
      EmailInput.current!.value = '';
      phoneno.current!.value = '';
      password.current!.value = '';
    };

    return (
    <>
      <Stack spacing={5}>
        
      <Stack spacing={1}>
      <label>Enter your Full-Name</label>
      <Input  placeholder='Enter your full Name'  ref={Fullname}/>
      </Stack>
      {/* <Email /> */}
        <label>Enter your Email</label>
        <Input  placeholder='Email'  ref={EmailInput}/>
      <Stack spacing={1}>
          <label>Phone-No</label>
      <InputGroup>
      <InputLeftAddon>+91</InputLeftAddon>
      <Input type='tel' placeholder='phone number' ref={phoneno} />
      </InputGroup>
      </Stack>
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
      <Button colorScheme='teal' variant='solid' onClick={handelSignup} >
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
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
              Your Account is Created Sucessfully
              </AlertDialogBody>

              <AlertDialogFooter>
               
                <Button colorScheme='purple' onClick={onClose} ml={3}>
                  Done
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>z
        </AlertDialog>
    
    </>
    )
  }

  export default Signup
