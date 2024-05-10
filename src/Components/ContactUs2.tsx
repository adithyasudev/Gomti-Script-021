import React from 'react'
import Bluebox from './Bluebox'

export const ContactUs2 = () => {
  return (
    <>
    <div style={{backgroundColor :'#ffffff#fff'}}>
    <h1 style={{marginLeft:'15%'}}>Contact Us</h1>
      

      <div style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap'}}>

      <div >
        <Bluebox />
        
          <p style={{fontSize:'25px',}}> <span style={{color: 'blue',fontSize:'25px'  }}>ConvexTech Inc.</span> is proud to operate with a globally distributed team, ensuring a diverse
            <br/> and dynamic working environment. Our offices are strategically located across three <br/> countries, each fully equipped  with the necessary resources to support our operations <br/>and innovations.</p>
          <p style={{fontSize:'25px'}}>For detailed addresses and specific contact information of each office, we invite you to<br/> reach out directly to our team.</p>
      </div>
      <div>
      <img src="https://picjj.com/images/2024/05/09/sMaw1.png" alt="" />
      </div>
      </div>
    </div>
    </>
  )
}


