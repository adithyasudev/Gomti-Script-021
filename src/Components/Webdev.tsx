import React, { useEffect } from 'react'
import Bluebox from './Bluebox'
import Style from './Sartik.module.css'
import useScrollAnimation from '../customHooks/animation';

const Webdev = () => {
  
  const isVisible = useScrollAnimation(); 
  // useEffect(()=>{
  //   console.log("webdev");    
  // },[])


  return (
    <div style={{display:'flex'}} className={Style.webdev} > 
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}} className={Style.webdevpart1}>
        <Bluebox />
        <div>
        <p style={{fontSize:'30px', color:'darkblue' ,fontWeight:'bolder'}}>Web Devlopment</p>
        <p>
          CyberMart is a multi-vendor system. An efficient system where you can <br />
         register as seller as well as customer. You can purchase and sold <br />
         anything you want. Cybermart is working in three of the countries <br />
          like Pakistan, India and USA. Shop for the millions of products<br />
         available in multiple categories and hot-selling brands.
         </p>
      </div>
      </div>
      <div><img src="https://convextech.com/wp-content/uploads/2022/07/Group-7519.png" alt=""  className={Style.scaleimage}/></div>
    </div>
  )
}

export default Webdev
