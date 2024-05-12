
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import AddJobopening from './Addjobopening';
import AddEvents from './AddEvents';
import RemoveEvents from './RemoveEvents';
import { RemoveJobopenings } from './RemoveJobopenings';

const Adminbody = () => {
  return (
    <div style={{height:"100vh", backgroundColor:"white"}}>
  <Tabs isFitted  variant='enclosed'>
  <TabList mb='1em'>
    <Tab >Add Job openings </Tab>
    <Tab>Remove Job openings</Tab>
    <Tab>Add Events</Tab>
    <Tab>Remove Events</Tab>
  </TabList>
  <TabPanels >
    <TabPanel  >
    <AddJobopening/>
    </TabPanel>
    <TabPanel>
    <RemoveJobopenings/>
    </TabPanel>
    <TabPanel>
    <AddEvents/>
    </TabPanel>
    <TabPanel>
    <RemoveEvents/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </div>
  )
}

export default Adminbody