//import React from 'react'
//import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

import { Stack } from "@chakra-ui/react";
import Style from "./Career.module.css";
import Bluebox from "./Bluebox";
import useScrollAnimation from "../customHooks/animation";
import CustomButton from "./button";

const Career = () => {
  const isVisible = useScrollAnimation();
  return (
    <Stack spacing={10}>
      <div
        style={{
          backgroundImage: "url(https://picjj.com/images/2024/05/09/sNPVP.png)",
          backgroundSize: "cover ",
          width: "100vw",
          height: "500px",
          margin: "100",
        }}
      >
        <div className={Style.portfolio}>
          <Bluebox />
          <h5 className={`animated-text ${isVisible ? "animated" : ""}`}>
            <h2>
              WORLD-CLASS PERFORMANCE SERVICES O HELP BRANDS GROW IN THE
              HYPERCONNECTED
            </h2>
            <br/>
            <h5>
              Imagine you don't need a degree, you don't need an office, you
              don't need a team, you don't need prior experience and yet you can
              learn, earn, achieve and accomplish far beyond your hopes and
              expectations.
            </h5>
            <br/>
           <CustomButton/>
          </h5>
        </div>
      </div>
    </Stack>
  );
};

export default Career;
