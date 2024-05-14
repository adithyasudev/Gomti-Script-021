//import React from 'react'
//import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Stack } from "@chakra-ui/react";
import Style from "./LandingPage.module.css";
import CustomButton from "./button";
import { useEffect, useState } from "react";

const LandingPage = () => {


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
    <Stack spacing={2}>
      <div
        style={{
          backgroundImage: "url(https://picjj.com/images/2024/05/14/7NEus.webp)",
          backgroundSize: "cover ",
          width: "100vw",
          height: "70vh",
          margin: "auto",

        }}
      >
       
        <div className={Style.portfolio} style={{margin:"auto"}}>
          <div className={`animated-text ${animated ? "animated" : ""}`}>
            <p style={{fontWeight: '900',fontSize:'20px'}}>
              WORLD-CLASS PERFORMANCE SERVICES O HELP BRANDS <br /> GROW IN THE
              HYPERCONNECTED
            </p>
            <br/>
            <h5>
              Imagine you don't need a degree, you don't need an office,
              <br/> you
              don't need a team, you don't need prior
              <br/> experience and yet you can
              learn, earn, achieve and 
              <br/> accomplish far beyond your hopes and
              expectations.
            </h5>
            <br/>
           <CustomButton/>
          </div>
        </div>
      </div>
    </Stack>
   </>
  );
};

export default LandingPage;
