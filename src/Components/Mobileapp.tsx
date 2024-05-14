
import Bluebox from './Bluebox'
import Style from './Sartik.module.css'
const Mobileapp = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-between'  }} className={Style.divh}>
      <div ><img src="https://picjj.com/images/2024/05/14/7h993.jpg" alt="" className={Style.scaleimage}/></div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
        <Bluebox />
        <div>
        <p style={{fontSize:'30px', color:'darkblue' ,fontWeight:'bolder'}}> CyberMart Mobile Application</p>
        <p>
        Beyond boundries is a vendor system. An efficient system where you <br />
         register as seller as well as customer. You can purchase and sold <br />
         anything you want.  Beyond boundries is working in three of the countries <br />
          like Pakistan, India and USA. Shop for the millions of products<br />
         available in multiple categories and hot-selling brands.
         </p>
        </div>
       
      </div>
    </div>
  )
}

export default Mobileapp
