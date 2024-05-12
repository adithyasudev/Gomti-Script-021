import axios from 'axios';
import  { useEffect, useState } from 'react'
import Freelancer from './Freelancer';

export interface FreeLancer{
    id: number;
    name: string;
    skills: string[];
    rating: number;
    total_reviews: number;
    rate_per_hour: number;
}

const Freelancers = () => {
let [data,setDeta] = useState<FreeLancer[]|null>(null);
useEffect(()=>{
    const fetchData = async () => {
        try {
          const response = await axios.get('https://gomti-script-021.onrender.com/freelancers');
          setDeta(response.data);
         
        } catch (error) {
          console.error('Error fetching data:', error);
          
        }
      }
      fetchData();
},[])
  return (
    <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-around", gap:"20px"}}>
        {data? data.map((ele:FreeLancer)=>(
 <Freelancer id= {ele.id} name = {ele.name}  skills={ele.skills} rating= {ele.rating} rate_per_hour = {ele.rate_per_hour} total_reviews = {ele.total_reviews} />
        )):(<p>Loading</p>)}
    </div>
  )
}

export default Freelancers