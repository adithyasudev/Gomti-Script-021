// import { color } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
import useScrollAnimation from '../customHooks/animation'

const ServicesSectioninner2= ({children}) => {

  let isVisible = useScrollAnimation();
  return (
    <div className={ `animated-text ${isVisible? "animated":""}`} style={ {backgroundColor:"white", width: "230px" , height:"auto", color:'black', borderRadius:"10px", padding:"30px"}}>
    {children}
    </div>
  )
}

export default ServicesSectioninner2