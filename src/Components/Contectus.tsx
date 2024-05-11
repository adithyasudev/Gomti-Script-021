import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

const Contectus = () => {
  const bgColor = useColorModeValue("gray.100", "gray.700"); // Added this line

  return (
    <Box
    //   bgImage={`url('https://convextech.com/wp-content/uploads/2022/07/form-sub.png')`}
    //   bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="100vh" // Changed this line
      w="100vw" // Changed this line
      position="relative" // Added this line
    >
      <Box
        bgColor={bgColor} // Changed this line
        bgImage={`url('https://convextech.com/wp-content/uploads/2022/07/form-sub.png')`}
        p={8}
        borderRadius="md"
        boxShadow="md"
        marginLeft={"auto"}
        marginRight={"auto"}
        w={1200}        
       
    
      >
        <FormControl mb={4} >
          <FormLabel htmlFor="name">Your Name</FormLabel>
          <Input id="name" name="name" placeholder="Your Name" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="email">Your Email</FormLabel>
          <Input id="email" name="email" type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl mb={6}>
          <FormLabel htmlFor="message">Your Message</FormLabel>
          <Textarea id="message" name="message" placeholder="Your Message" /> {/* Changed this line */}
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Contectus;