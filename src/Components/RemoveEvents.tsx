import React, { useRef } from 'react'
import {
    FormControl,
    FormLabel,
    Input, Button
  } from '@chakra-ui/react'
import axios from 'axios';

export interface Id{
    id:string
}

const RemoveEvents = () => {
    const idref = useRef<HTMLInputElement>(null);
    
   
    const handlePost = async()=>{
     
       if(idref.current && idref.current.value ){
           const event:Id  = {
             id: idref.current.value,
       }
       try {
         const response = await axios.delete(`https://gomti-script-021.onrender.com/events/${event.id}`)
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
     <FormLabel>Event id which you want to delete </FormLabel>
     <Input ref={idref} type='number' placeholder=" " />
  
     <Button onClick={handlePost}>Post </Button>
   </FormControl>
       </div>
      
     )
}

export default RemoveEvents