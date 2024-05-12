import React from 'react'
import { FreeLancer } from './freelancers'
import {Button } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { Employees } from './Employees'
import { ToastExample } from './taost'
const Employee:React.FC<Employees> = ({name,id,degree, desiredRole,rating,profileImage}) => {
  return (
    <div style={{width:"300px", padding:"20px",  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"5px"  } } >
        <h2 style={{fontWeight:"bold"}}>
            <img src= {`${profileImage}`} alt="" style={{borderRadius:"50%",height:"100px",maxWidth:"38%" }} />
            {name}
        </h2>
        <p>
        Degree :  {degree}
        </p>
        <div > Ratings :<span> {rating} <StarIcon h="12px"/></span>   <p>Desired Role {desiredRole}</p> </div>
        <ToastExample/>
    </div>
  )
}

export default Employee