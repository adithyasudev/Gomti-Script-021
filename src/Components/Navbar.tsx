
import {  NavLink } from 'react-router-dom'
import Styles from './Navlink.module.css'
import InitialFocus from './Login-form'
import {  useSelector } from 'react-redux'
import { Sidebar } from './SIdebar'
const Navbar = () => {
    const loggedinUser = useSelector(state=>state.user.isAuthenticated); 
    const loggedinAdmin= useSelector(state=>state.admin.isAuthenticated); 
  return (
 
<>
<div style={{height:"30px", backgroundColor:"white",width:"100vw"} }> 

    </div>
    <div style={{display:"flex", justifyContent:"space-around",backgroundColor:"#c9d3d5"}}>

    <div>
        <img src="https://picjj.com/images/2024/05/11/hQZkl.jpeg" width="80px" alt="" />
    </div>
    <div style={{height:"80px",display:"flex",alignItems:"center"} }>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="./">About</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="./portfolio">Portfolio</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="./career">Career</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="./services">Services</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="./events">Events</NavLink>
        <NavLink style={({isActive})=>{ 
    return isActive?{color:"#5a8a9a"}:{color:"black"}}} className={Styles.navbarlink} to="./contactus">Contact us</NavLink>
    </div>


<div style={{height:"80px",display:"flex",alignItems:"center"}}>
{!loggedinUser &&!loggedinAdmin&&(<InitialFocus/>)} 
    {loggedinAdmin&& (<Sidebar/>)} 
</div>
    </div>
</>
    
   
  )
}

export default Navbar