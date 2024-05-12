import { useEffect, useState } from "react";
import Bluebox from "./Bluebox"
import Style from './about1.module.css'




export const About1 = () => {
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
    <div   className={Style.bgport}>
    <div className={Style.Event1} >
    <Bluebox />
    <h1 className={`animated-text ${animated ? 'animated' : ''}`} ><p className={Style.bigtxt}>About Us</p></h1>
   </div>
   </div>
    </>
  )
}
