import axios from 'axios';
import { useEffect, useState } from 'react'
// import Freelancer from './Freelancer';
import Employee from './Employee';

export interface Employees{
    id: number;
    name: string;
    degree: string;
    rating: number;
    desiredRole: string;
    profileImage: string;
}

const Employees = () => {
let [data,setDeta] = useState<Employees[]|null>(null);
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get('https://gomti-script-021.onrender.com/jobseekers');
          setDeta(response.data);
         
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
      }
      fetchData();
},[])
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", gap:"20px"}}>
        {data? data.map((ele:Employees)=>(
 <Employee id= {ele.id} name = {ele.name}  degree={ele.degree} rating= {ele.rating} desiredRole = {ele.desiredRole} profileImage = {ele.profileImage} />
        )):(<p>Loading</p>)}
    </div>
  )
}

export default Employees