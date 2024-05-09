
import { Tabs , TabList, TabPanels, Tab, TabPanel, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import Uiuxdesign from './Uiuxdesign'
import Webdev from './Webdev'
import Mobileapp from './Mobileapp'

const Portfolio2 = () => {
  return (
    <div style={{ display:'flex', justifyContent:'center', marginLeft:'auto', marginRight:'auto', marginTop:'5vh', paddingTop:'4vh'}}>
     <Tabs   variant='soft-rounded' colorScheme='blue'>
  <TabList style={{display:'flex', justifyContent:'space-evenly', marginLeft:'auto', marginRight:'auto' , width:'80vw'}}>
    <Tab>All</Tab>
    <Tab>UI/UX Design </Tab>
    <Tab>Web Devlopment</Tab>
    <Tab>Mobile Application Devlopment</Tab>
  </TabList>
  <TabPanels >
    <TabPanel>
      <Stack spacing={10}>
      <Uiuxdesign />
      <Webdev />
      <Mobileapp />
      </Stack>
     
    </TabPanel>
    <TabPanel>
      <Uiuxdesign />
    </TabPanel>
    <TabPanel>
      <Webdev />
    </TabPanel>
    <TabPanel>
      <Mobileapp />
    </TabPanel>
  </TabPanels>
  
</Tabs>
    
    </div>
  )
}

export default Portfolio2


