
import Bluebox from './Bluebox'
import Style from './Sartik.module.css'


const Webdev = () => {
  

  // useEffect(()=>{
  //   console.log("webdev");    
  // },[])


  return (
    <div style={{display:'flex', justifyContent:'space-between'}} className={Style.webdev} > 
        <div><img src="https://picjj.com/images/2024/05/14/7hDGB.png" alt=""  className={Style.scaleimage}/></div>
      <div style={{display:'flex', flexDirection:'column', justifyContent:'space-evenly'}} className={Style.webdevpart1}>
        <Bluebox />
        <div>
        <p style={{fontSize:'30px', color:'darkblue' ,fontWeight:'bolder'}}>Web Devlopment</p>
        <p>
          Beyond boundries is a multi-vendor system. An efficient system where you<br />
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

export default Webdev
