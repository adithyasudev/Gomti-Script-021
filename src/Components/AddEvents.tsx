import  { useRef } from 'react'

import {
    FormControl,
    FormLabel,
    Input, Button
  } from '@chakra-ui/react'
import axios from 'axios';

interface EventsType{
title: string,
discription: string,
image:string;
}

const AddEvents = () => {
    const titleref = useRef<HTMLInputElement>(null);
    const discriptionref = useRef<HTMLInputElement>(null);
    const imageref = useRef<HTMLInputElement>(null);
   
    const handlePost = async()=>{
     
       if(titleref.current && imageref.current && discriptionref.current && titleref.current.value && imageref.current.value && discriptionref.current.value ){
           const event:EventsType  = {
             title: titleref.current.value,
           discription: discriptionref.current.value,
           image: imageref.current.value       
         
       }
       try {
         const response = await axios.post('https://gomti-script-021.onrender.com/events', event)
         console.log('User data posted successfully:', response.data);
         // Clear the form fields after successful submission
         
   
       } catch (error) {
         console.error('Error posting user data:', error);
       }
   
       }
    }
   
     return (
   
       <div>
    <FormControl style={{width:"380px",margin:"auto",padding:"30px" ,boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"}}>
     <FormLabel>Event Title </FormLabel>
     <Input ref={titleref} type='text' placeholder="i.e Birthday Party" />
     <FormLabel>Event Description</FormLabel>
     <Input ref={discriptionref} type='text' />
     <FormLabel>Image link</FormLabel>
     <Input ref={imageref} type='text' />
     <Button onClick={handlePost}>Post </Button>
   </FormControl>
       </div>
      
     )
}

export default AddEvents