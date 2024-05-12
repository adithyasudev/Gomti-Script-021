import React from 'react'
import { FreeLancer } from './freelancers'
import {Button } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { Employees } from './Employees'
const Employee:React.FC<Employees> = ({name,id,degree, desiredRole,rating,profileImage}) => {
  return (
    <div style={{width:"300px", padding:"20px",  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius:"5px"  } } >
        <h2 style={{fontWeight:"bold"}}>
            <img src= {`${profileImage}`} alt="" width="200px" style={{borderRadius:"50%"}} />
            {name}
        </h2>
        <p>
        Degree :  {degree}
        </p>
        <div > Ratings :<span> {rating} <StarIcon h="12px"/></span>   <p>Desired Role {desiredRole}</p> </div>
        <Button colorScheme='blue' size='sm' > Hire now </Button>
    </div>
  )
}

export default Employee