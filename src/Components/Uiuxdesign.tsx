

import Bluebox from './Bluebox'
import Style from './Sartik.module.css'

const Uiuxdesign = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between',  paddingLeft:'2vw', paddingRight:'2vw' ,flexWrap:'wrap'}} className={Style.divh}>
    
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}} className={Style.webdevpart1}>
        <Bluebox />
        <div>
        <p style={{fontSize:'30px', color:'darkblue' ,fontWeight:'bolder'}}> UI/UX  Design</p>
        <p>
        Beyond boundries is a multi-vendor system. An efficient<br/> system where you can 
          register as seller as well as <br />customer. You can purchase and sold
         anything you <br /> want.  Beyond boundries is working in three of the <br />countries 
          like Pakistan, Shop for the millions of <br />products
         available in multiple categories and  <br />hot-selling brands.
         </p>
        </div>
       
      </div>
      <div ><img src="https://picjj.com/images/2024/05/14/7hZdq.webp" alt="" className={Style.scaleimage} style={{width:'24vw'}}/></div>
    </div>
  )
}

export default Uiuxdesign


