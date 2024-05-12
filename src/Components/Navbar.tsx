
import {  Link, NavLink } from 'react-router-dom'
import Styles from './Navlink.module.css'
import InitialFocus from './Login-form'
import {  useSelector } from 'react-redux'
import { Sidebar } from './SIdebar'
import { Alert,  AlertIcon, Center, Spinner} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
const Navbar = () => {
    const loggedinUser = useSelector(state=>state.user.isAuthenticated); 
    const loggedinAdmin= useSelector(state=>state.admin.isAuthenticated); 
    const lodingUser= useSelector(state=>state.user.loading);
    const lodingAdmin= useSelector(state=>state.user.loading);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (loggedinUser) {
            setShowAlert(true);
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [loggedinUser]);

  return (
 
<>

    <div style={{display:"flex", justifyContent:"space-around",backgroundColor:"#c9d3d5" ,position:'fixed',top:'0px',right:'0px',left:'0px' ,width:'100vw',zIndex:'1', flexWrap:'wrap', alignItems:'Center'}}>


    <div>

    <Link to="/">
    <img src="https://picjj.com/images/2024/05/11/hQZkl.jpeg" width="75vw" alt="" />
    </Link>
       
    </div>
    <div style={{height:"80px",display:"flex",alignItems:"center"} }>
      
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="/portfolio">Portfolio</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="/career">Career</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="/services">Services</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="/events">Events</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="/contactus">Contact us</NavLink>
      <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="/about">About</NavLink>
    </div>



<div style={{height:"80px",display:"flex",alignItems:"center"}}>
{!loggedinUser &&!loggedinAdmin&&(<InitialFocus/>)} 
    {(loggedinAdmin||loggedinUser)&& (<Sidebar/>)} 
</div>
    </div>
    <div style={{height:'80px', backgroundColor:"white",width:"100vw"} }> 
    </div>

    {loggedinUser && showAlert && (
       <div>
       <Alert status='success' variant='subtle' pos='fixed'
        bottom='20px' margin='auto' width='40vw' marginLeft='30%' >
        <AlertIcon />
        User Logged in Sucessfully!
       </Alert>
       </div>
      )}

{lodingUser && !loggedinUser  && <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  pos='fixed'
  zIndex='2'
  marginLeft='50%'
  marginTop='50%'
/>
}
</>
  )
}

export default Navbar