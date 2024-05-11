import { Button, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react"
import React from "react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import Login from './Login'
import Signup from "./Signup"
import Login from "./Login"

 function  InitialFocus(){
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
  
    return (
      <>
        <Button onClick={onOpen}>LOGIN/SIGNUP</Button>
       
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Login/ Signup</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
            <Tabs variant='soft-rounded' colorScheme='blue'>
  <TabList>
    <Tab>Log-in</Tab>
    <Tab>Sign-up</Tab>
  </TabList>
  <TabPanels>
     <TabPanel>
             <Login />
     </TabPanel>
    <TabPanel>
         <Signup/>     
    </TabPanel>
  </TabPanels>
</Tabs>
              
            </ModalBody>
  
            
          </ModalContent>
        </Modal>
      </>
    )
  }
  export default InitialFocus