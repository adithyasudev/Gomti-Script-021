import useScrollAnimation from "../customHooks/animation";
import Bluebox from "./Bluebox"
import Style from './about1.module.css'




export const About1 = () => {
  const isVisible = useScrollAnimation();
  return (
    <>
    <div   className={Style.bgport}>
    <div className={Style.Event1} >
    <Bluebox />
    <h1 className={`animated-text ${isVisible ? 'animated' : ''}`} ><p className={Style.bigtxt}>About Us</p></h1>
   </div>
   </div>
    </>
  )
}
