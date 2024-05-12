import  { useEffect, useState } from 'react'
import Style from "./Services.module.css"
import Bluebox from './Bluebox';
const ServicesSection1 = () => {
  let [animated,setAnimated] = useState(false);
   useEffect(()=>
  {
    const timer = setTimeout(() => {
      setAnimated(true);
    }, 300);
    return () => clearTimeout(timer);
  },[])

  return (
    <>
      
        <div style={{backgroundImage: 'url(https://convextech.com/wp-content/uploads/2023/02/Portfolio.jpg)', backgroundSize: 'cover ', width: '100vw', height: '250px',margin:'100' } }  className={Style.bgport}>
    <div className={Style.services} >
    <Bluebox  />
    <h1  className={`animated-text ${animated ? 'animated' : ''}`}>Services</h1>
   </div>
   

   </div>
    </>
  )
}

export default ServicesSection1