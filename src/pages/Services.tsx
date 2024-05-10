
import Sectiontwoinner from '../Components/Sectiontwoinner';
import ServicesSection1 from '../Components/ServicesSection1';
import ServicesSection2 from '../Components/servicesSection2';

const Services = () => {


  return (
    <>
   <ServicesSection1 />
    <div style={{backgroundColor:"white" , display: "flex", flexWrap:"wrap", justifyContent:'space-around',}} >
    <Sectiontwoinner />
    </div>
    </>
  )
}

export default Services