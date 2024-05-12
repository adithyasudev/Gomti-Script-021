import  { useRef } from 'react'
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input, Button
  } from '@chakra-ui/react'
import axios from 'axios';
  
interface jobsType{
  title: string;
  type:string;
  description: string;
  requirements: string[];
}

const AddJobopening = () => {
 const titleref = useRef<HTMLInputElement>(null);
 const typeref = useRef<HTMLInputElement>(null);
 const descriptionref = useRef<HTMLInputElement>(null);
 const requirementsref = useRef<HTMLInputElement>(null);

 const handlePost = async()=>{
  
    if(titleref.current && typeref.current && descriptionref.current && requirementsref.current && titleref.current.value && typeref.current.value && descriptionref.current.value && requirementsref.current.value){
        const jobData:jobsType  = {
          title: titleref.current.value,
        type: typeref.current.value,
        description: descriptionref.current.value,
        requirements: requirementsref.current.value.split(',')        
      
    }
    try {
      const response = await axios.post('https://gomti-script-021.onrender.com/jobs', jobData)
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
  <FormLabel>Job Title </FormLabel>
  <Input ref={titleref} type='text' placeholder="i.e React developer,UI/UX Designer etc " />
  <FormLabel>Job type</FormLabel>
  <Input ref={typeref} type='text' placeholder="i.e Full time/Work from Home etc  "/>
  <FormLabel>Job Description</FormLabel>
  <Input ref={descriptionref} type='text' />
  <FormLabel>Requirements</FormLabel>
  <Input ref={requirementsref} type='text' />
  <Button onClick={handlePost}>Post </Button>
  <FormHelperText>Use '," if have multiple Requirement in the Requirement feild</FormHelperText>
</FormControl>
    </div>
   
  )
}

export default AddJobopening