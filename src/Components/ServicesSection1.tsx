import React from 'react'
import useScrollAnimation from '../customHooks/animation';
import Style from "./Services.module.css"
import Bluebox from './Bluebox';
const ServicesSection1 = () => {
    let isVisible = useScrollAnimation();
  return (
    <>
        

        <div style={{backgroundImage: 'url(https://convextech.com/wp-content/uploads/2023/02/Portfolio.jpg)', backgroundSize: 'cover ', width: '100vw', height: '250px',margin:'100' } }  className={Style.bgport}>
    <div className={Style.services} >
    <Bluebox  />
    <h1  className={`animated-text ${isVisible ? 'animated' : ''}`}>Services</h1>
   </div>
   

   </div>
    </>
  )
}

export default ServicesSection1