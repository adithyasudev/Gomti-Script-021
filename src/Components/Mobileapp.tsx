
import Bluebox from './Bluebox'
import Style from './Sartik.module.css'
const Mobileapp = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly'  }} className={Style.divh}>
      <div ><img src="https://convextech.com/wp-content/uploads/2022/07/Group-7506.png" alt="" className={Style.scaleimage}/></div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
        <Bluebox />
        <div>
        <p style={{fontSize:'30px', color:'darkblue' ,fontWeight:'bolder'}}> CyberMart Mobile Application</p>
        <p>
          CyberMart is a multi-vendor system. An efficient system where you can <br />
         register as seller as well as customer. You can purchase and sold <br />
         anything you want. Cybermart is working in three of the countries <br />
          like Pakistan, India and USA. Shop for the millions of products<br />
         available in multiple categories and hot-selling brands.
         </p>
        </div>
       
      </div>
    </div>
  )
}

export default Mobileapp
