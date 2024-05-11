import { Card, CardHeader, CardBody, CardFooter, Text, Heading, SimpleGrid } from '@chakra-ui/react'
import Bluebox from './Bluebox'
import style from './Adithya.module.css'
export const Location = () => {
  return (
    <>
      <div className={style.Location}>
        <div className={style.loct}>
          
          <h1>
            <span className={style.loc}>Location</span>
          </h1>
          <Bluebox  />
        </div>
        
        <div>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' style={{ width: '100vw', backgroundColor: 'white', display: 'flex', justifyContent: 'space-around',paddingTop:'65px',marginLeft:'auto',marginRight:'auto' }}>
            <Card className="location" style={{ width: '25vw', backgroundColor: '#fafafa', border: '1px solid', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardHeader>
                <Heading size='md'> INDIA</Heading >
              </CardHeader>
              <CardBody>
                <Text>info@convextech.com</Text>
                <Text>+91 (402) 999-4717</Text>
              </CardBody>
              <CardFooter>
                <Text>Open Monday – Friday: 08:00 – 18:00 (Local Time)</Text>
              </CardFooter>
            </Card>
            <Card className="location" style={{ width: '25vw', backgroundColor: '#fafafa', border: '1px solid', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardHeader>
                <Heading size='md'> USA</Heading>
              </CardHeader>
              <CardBody>
                <Text>info@convextech.com</Text>
                <Text>+1 (346) 629-9835</Text>
              </CardBody>
              <CardFooter>
                <Text>Open Monday – Friday: 08:00 – 18:00 (Local Time)</Text>
              </CardFooter>
            </Card>
            <Card className="location" style={{ width: '25vw', backgroundColor: '#fafafa', border: '1px solid', borderRadius: '6px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardHeader>
                <Heading size='md'> UK</Heading>
              </CardHeader>
              <CardBody>
                <Text>info@convextech.com</Text>
                <Text>+5 (346) 669-9333</Text>
              </CardBody>
              <CardFooter>
                <Text>Open Monday – Friday: 08:00 – 18:00 (Local Time)</Text>
              </CardFooter>
            </Card>
          </SimpleGrid>
        </div>
      </div>
    </>
  )
}
