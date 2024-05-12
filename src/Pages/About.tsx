import  Style   from './about.module.css'
import { About1 } from '../Components/About1'
import { About2 } from '../Components/About2'
import { About4 } from '../Components/About4'
import { About5 } from '../Components/About5'
import { About3 } from '../Components/About3'



 const About = () => {
  return (
    <>
    <div className={Style.about}>
    <About1 />
    <About2 />
    <About3 />
    <About4 />
    <About5 />
   
  

    </div>
    </>
  )
}
export default About
