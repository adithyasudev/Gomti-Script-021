
import Bluebox from './Bluebox'
import { Stack } from '@chakra-ui/react'
import useScrollAnimation from '../customHooks/animation';
import Style from './Sartik.module.css'
// import './App.css'
const Portfolio1 = () => {
  const isVisible = useScrollAnimation(); 

  return (
    <>  
    <Stack spacing={5}>
    <div style={{backgroundImage: 'url(https://convextech.com/wp-content/uploads/2023/02/Portfolio.jpg)', backgroundSize: 'cover ', width: '100vw', height: '250px',margin:'100' } }  className={Style.bgport}>
    <div className={Style.portfolio} >
    <Bluebox  />
    <h1  className={`animated-text ${isVisible ? 'animated' : ''}`}><p className={Style.bigtxt}>Portfolio</p></h1>
   </div>
   

   </div>
   <img src='https://convextech.com/wp-content/uploads/2024/03/FG-3-1024x277.png' style={{height:'45vh', marginLeft:'auto', marginRight:'auto', width:'80vw' }  } className={`animated-text ${isVisible ? 'animated' : ''}`}></img>
    </Stack>
    </>
  )
}

export default Portfolio1
