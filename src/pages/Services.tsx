
import { useEffect, useState } from 'react';
import Sectiontwoinner from '../Components/Sectiontwoinner';
import ServicesSection1 from '../Components/ServicesSection1';
import axios from 'axios';
import ServicesSectioninner2 from '../Components/servicesSection2';
import Style from "../Components/Services.module.css"
import Freelancers from '../Components/freelancers';
// import Employee from '../Components/Employee';
import Employees from '../Components/Employees';

interface services{
  id:number;
  name:string;
  description:string;
  svg:string
}

const Services = () => {
const [data,setData ]= useState<services[]|null>(null);
const [freelancer,setFreelancer] = useState(false);
const [employee,setEmployess] = useState(false);
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('https://gomti-script-021.onrender.com/services');
      setData(response.data);
     
    } catch (error) {
      console.error('Error fetching data:', error);
      
    }
  }
  fetchData();
}, [])

  return (
    <>
   <ServicesSection1 />
    <div style={{backgroundColor:"white" , display: "flex", flexWrap:"wrap", justifyContent:'space-around', padding:"20px"}} >
    <Sectiontwoinner />
  {
    data? data.map((ele:services)=>(<ServicesSectioninner2 key={ele.id}>
      <img src={ele.svg} alt="" width= "70px"/>
      <h2 style={{color:"#25abe2", fontWeight:"bold"}}>{ele.name}</h2>
      <p>{ele.description}</p>
    </ServicesSectioninner2>)):(<p></p>)
  }
    </div>
   <div  style={{backgroundColor:"white" , display: "flex", flexWrap:"wrap", justifyContent:'space-around', padding:"20px"}}>
   <div onClick={()=>{
    setFreelancer(true)
    setEmployess(false)
   }} className={Style.hire} style={ { backgroundImage:"url(https://picjj.com/images/2024/05/11/Nexa2.png)"}} >
      <h2>Hire FreeLancers</h2>  
   </div>
   <div onClick={()=>{
    setEmployess(true)
    setFreelancer(false)
    
   }} className={Style.hire} style={ { backgroundImage:"url(https://picjj.com/images/2024/05/11/NEVF1.png)", }} >
     <h2>Hire Employees</h2> 
   </div>
   </div>
 {freelancer?(<Freelancers/>):(<p></p>)}
 {employee?(<Employees/>):(<p></p>)}

    </>
  )
}

export default Services