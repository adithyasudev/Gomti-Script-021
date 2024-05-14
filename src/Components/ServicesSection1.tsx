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
      
        <div style={{backgroundImage: 'url(https://picjj.com/images/2024/05/14/7hJA2.jpg)', backgroundSize: 'cover ',backgroundPosition:'center', width: '100vw', height: '250px',margin:'100' } }  className={Style.bgport}>
    <div className={Style.services} >
    <Bluebox  />
    <h1  className={`animated-text ${animated ? 'animated' : ''}`}>Services</h1>
   </div>
   

   </div>
    </>
  )
}

export default ServicesSection1