import { Card, CardHeader, CardBody, CardFooter, Text, Heading, SimpleGrid, Box } from '@chakra-ui/react'
import Bluebox from './Bluebox'

export const Location = () => {
  return (
    <>
      <div style={{
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
      }}>
        <div style={{
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '4vw' }}>Location</h1>
          <Bluebox />
        </div>
        
        <div style={{
          width: '90%',
          maxWidth: '1200px',
        }}>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
            <Card className="location" style={{
              backgroundColor: '#fafafa',
              border: '1px solid',
              borderRadius: '6px',
              
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
            }}>
              <CardHeader>
              <Heading size='md' fontSize='45px' textAlign='center'  borderRadius='10px' backgroundColor='#ea8e33' backgroundImage='linear-gradient(43deg, #ea8e33 0%, #ecece7 46%, #25b52e 100%)' color='white'>
              <span style={{ color: '#000' }}> INDIA</span>
 
</Heading>

              </CardHeader>
              <CardBody>
              <Box>
  <Text fontSize={{ base: '14px', md: '16px', lg: '30px' }} textAlign='center'>info@convextech.com</Text>
  <br />
  <Text fontSize={{ base: '14px', md: '16px', lg: '35px' }} textAlign='center'>+91 (402) 999-4717</Text>
</Box>

              </CardBody>
              <CardFooter>
  <Text style={{ backgroundColor: '#229ed0', borderRadius: '10px',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', fontSize: '35px', textAlign: 'center' }}>
    Open Monday – Friday: 08:00 – 18:00 (Local Time)
  </Text>
</CardFooter>

            </Card>
            {/* Repeat similar Card components for other locations */}
            <Card className="location" style={{
              backgroundColor: '#fafafa',
              border: '1px solid',
              borderRadius: '6px',
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
            }}>
              <CardHeader>
              <Heading
  size='md'
  fontSize='45px'
  textAlign='center'
  borderRadius='10px'
  backgroundColor='#2828d6'
  backgroundImage='linear-gradient(177deg, #2828d6 0%, #ecece7 46%, #e2151e 100%)'
  color='#fff'
>
<span style={{ color: '#000' }}> USA</span>
 
</Heading>

              </CardHeader>
              <CardBody>
              <Box>
  <Text fontSize={{ base: '14px', md: '16px', lg: '30px' }} textAlign='center'>info@convextech.com</Text>
  <br />
  <Text fontSize={{ base: '14px', md: '16px', lg: '35px' }} textAlign='center'>+91 (402) 999-4717</Text>
</Box>

              </CardBody>
              <CardFooter>
  <Text style={{ backgroundColor: '#229ed0', borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', fontSize: '35px', textAlign: 'center' }}>
    Open Monday – Friday: 08:00 – 18:00 (Local Time)
  </Text>
</CardFooter>

            </Card>
            <Card className="location" style={{
              backgroundColor: '#fafafa',
              border: '1px solid',
              borderRadius: '6px',
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
            }}>
              <CardHeader>
              
              <Heading
  size='md'
  fontSize='45px'
  borderRadius='10px'
  textAlign='center'
  backgroundColor='#0a7f27'
  backgroundImage='linear-gradient(90deg, #0a7f27 0%, #ecece7 46%, #d60813 100%)'
  color='#fff'
>
  <span style={{ color: '#000' }}>ITALY</span>
</Heading>



              </CardHeader>
              <CardBody>
              <Box>
  <Text fontSize={{ base: '14px', md: '16px', lg: '30px' }} textAlign='center'>info@convextech.com</Text>
  <br />
  <Text fontSize={{ base: '14px', md: '16px', lg: '35px' }} textAlign='center'>+91 (402) 999-4717</Text>
</Box>

              </CardBody>
              <CardFooter>
  <Text style={{ backgroundColor: '#229ed0', borderRadius: '10px',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', fontSize: '35px', textAlign: 'center' }}>
    Open Monday - Friday: 08:00 – 18:00 (Local Time)
  </Text>
</CardFooter>

            </Card>
            <Card className="location" style={{
              backgroundColor: '#fafafa',
              border: '1px solid',
              borderRadius: '6px',
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
            }}>
              <CardHeader>
             
              <Heading
  size='md'
  fontSize='45px'
  textAlign='center'
  borderRadius='10px'
  backgroundColor='#24d841'
  backgroundImage='linear-gradient(180deg, #24d841 0%, #4343c7 46%, #ffff00 100%)'
  color='#fff'
>
  <span style={{ color: '#000' }}>BRAZIL</span>
</Heading>




              </CardHeader>
              <CardBody>
              <Box>
  <Text fontSize={{ base: '14px', md: '16px', lg: '30px' }} textAlign='center'>info@convextech.com</Text>
  <br />
  <Text fontSize={{ base: '14px', md: '16px', lg: '35px' }} textAlign='center'>+91 (402) 999-4717</Text>
</Box>

              </CardBody>
              <CardFooter>
  <Text style={{ backgroundColor: '#229ed0', borderRadius: '10px',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', fontSize: '35px', textAlign: 'center' }}>
    Open Monday - Friday: 08:00 – 18:00 (Local Time)
  </Text>
</CardFooter>

            </Card>
            <Card className="location" style={{
              backgroundColor: '#fafafa',
              border: '1px solid',
              borderRadius: '6px',
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
            }}>
              <CardHeader>
              <Heading
  size='md'
  fontSize='45px'
  textAlign='center'
  textColor='black'
  borderRadius='10px'
  backgroundColor='#ffffff'
  backgroundImage='linear-gradient(180deg, #ffffff 0%, #ffffff 24%, #ff0000 49%, #ffffff 75%, #ffffff 100%)'
  color='#000' 
>
  JAPAN
</Heading>


              </CardHeader>
              <CardBody>
              <Box>
  <Text fontSize={{ base: '14px', md: '16px', lg: '30px' }} textAlign='center'>info@convextech.com</Text>
  <br />
  <Text fontSize={{ base: '14px', md: '16px', lg: '35px' }} textAlign='center'>+91 (402) 999-4717</Text>
</Box>

              </CardBody>
              <CardFooter>
  <Text style={{ backgroundColor: '#229ed0', borderRadius: '10px',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', fontSize: '35px', textAlign: 'center' }}>
    Open Monday - Friday: 08:00 – 18:00 (Local Time)
  </Text>
</CardFooter>

            </Card>
            <Card className="location" style={{
              backgroundColor: '#fafafa',
              border: '1px solid',
              borderRadius: '7px',
              boxShadow: 'rgb(38, 57, 77) 0px 20px 30px -10px'
            }}>
              <CardHeader>
              <Heading
  size='md'
  fontSize='45px'
  borderRadius='10px'
  textAlign='center'
  backgroundColor='#c10808'
  backgroundImage='linear-gradient(83deg, #c10808 0%, #deda18 46%, #141314 100%)'
  color='#000' // Setting text color to black
>
  GERMANY
</Heading>




              </CardHeader>
              <CardBody>
              <Box>
  <Text fontSize={{ base: '14px', md: '16px', lg: '30px' }} textAlign='center'>info@convextech.com</Text>
  <br />
  <Text fontSize={{ base: '14px', md: '16px', lg: '35px' }} textAlign='center'>+91 (402) 999-4717</Text>
</Box>

              </CardBody>
              <CardFooter>
  <Text style={{ backgroundColor: '#229ed0', borderRadius: '10px',  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', fontSize: '35px', textAlign: 'center' }}>
    Open Monday - Friday: 08:00 – 18:00 (Local Time)
  </Text>
</CardFooter>

            </Card>
          </SimpleGrid>
        </div>
      </div>
    </>
  )
}
