

import {  NavLink } from 'react-router-dom'
import Styles from './Navlink.module.css'
import InitialFocus from './Login-form'
const Navbar = () => {
    
  return (

    <div style={{display:"flex", justifyContent:"space-around",backgroundColor:"#c9d3d5", alignItems:'center'}}>

    <div>
        <img src="https://picjj.com/images/2024/05/11/hQZkl.jpeg" width="80px" alt="" />
    </div>
    <div style={{height:"80px",display:"flex",alignItems:"center"} }>
        <NavLink  className={Styles.navbarlink} to="/">About</NavLink>
        <NavLink  className={Styles.navbarlink} to="/portfolio">Portfolio</NavLink>
        <NavLink  className={Styles.navbarlink} to="/career">Career</NavLink>
        <NavLink  className={Styles.navbarlink} to="/services">Services</NavLink>
        <NavLink  className={Styles.navbarlink} to="/events">Events</NavLink>
        <NavLink  className={Styles.navbarlink} to="/contactus">Contact us</NavLink>
    </div>
  <InitialFocus />
    </div>
   
  )
}

export default Navbar
