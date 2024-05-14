
import { useEffect, useState } from 'react'

import Bluebox from './Bluebox'
import { Stack } from '@chakra-ui/react'
import useScrollAnimation from '../customHooks/animation';
import Style from './Sartik.module.css'
// import './App.css'
const Portfolio1 = () => {
  const isVisible = useScrollAnimation(); 
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
    <Stack spacing={5}>
    <div style={{backgroundImage: 'url(https://img.freepik.com/free-photo/aerial-view-business-team_53876-124515.jpg?t=st=1715694076~exp=1715697676~hmac=87381bbf925e8ca04ca19a6115564ceb1d406a63f04113ee6bd6f0700837b227&w=826)', backgroundSize: 'full',backgroundPosition:'center', width: '100vw', height: '250px',margin:'100' } }  className={Style.bgport}>
    <div className={Style.portfolio} >
    <Bluebox  />
    <h1  className={`animated-text ${animated ? 'animated' : ''}`}><p className={Style.bigtxt}>Portfolio</p></h1>
   </div>
   

   </div>
   <img src='https://res.cloudinary.com/gurucom/image/upload/f_auto,w_1063,b_rgb:2b3247/static/homepage/chooseguru_2x_rzilkv.jpg' style={{height:'45vh', marginLeft:'auto', marginRight:'auto', width:'80vw' }  } className={`animated-text ${isVisible ? 'animated' : ''}`}></img>
    </Stack>
    </>
  )
}

export default Portfolio1
