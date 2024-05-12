import React from 'react'
import { FreeLancer } from './freelancers'
import {Button } from "@chakra-ui/react"
import { StarIcon } from '@chakra-ui/icons'
import { ToastExample } from './taost'
const Freelancer:React.FC<FreeLancer> = ({name, id, rating, rate_per_hour,skills,total_reviews}) => {
  return (
    <div style={{width:"300px", padding:"20px", borderRadius:"5px",  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"} } >
        <h2 style={{fontWeight:"bold"}}>
            {name}
        </h2>
        <p>
           Skills :  {skills.join(",")}
        </p>
        <div > Ratings :<span> {rating} <StarIcon h="12px"/></span>   <p>Rate per hour: {rate_per_hour}$ </p> </div>
        <div> <span>Total Reviews :{total_reviews}</span></div>
        
        <ToastExample/>
    </div>
  )
}

export default Freelancer