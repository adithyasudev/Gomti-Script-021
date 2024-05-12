
import { Tabs , TabList, TabPanels, Tab, TabPanel, Stack } from '@chakra-ui/react'

import Uiuxdesign from './Uiuxdesign'
import Webdev from './Webdev'
import Mobileapp from './Mobileapp'
import Style from './Sartik.module.css'

const Portfolio2 = () => {
  
  return (
    <div style={{ display:'flex', justifyContent:'center', marginLeft:'auto', marginRight:'auto', marginTop:'5vh', paddingTop:'4vh'}}>
     <Tabs   variant='soft-rounded' colorScheme='blue'>
  <TabList style={{display:'flex', justifyContent:'space-evenly', marginLeft:'auto', marginRight:'auto' , width:'60vw'}}>
    <Tab  className={Style.backpro}>All</Tab>   
    <Tab  className={Style.backpro}>Web Devlopment</Tab>
    <Tab className={Style.backpro}>UI/UX Design </Tab>
    <Tab  className={Style.backpro}>Mobile Application Devlopment</Tab>
  </TabList>
  <TabPanels style={{marginTop:'10vh'}} >
    
    <TabPanel>
      <Stack spacing={10}>      
      <Webdev />
      <Uiuxdesign />
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


