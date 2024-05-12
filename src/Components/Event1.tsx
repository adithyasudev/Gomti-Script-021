
import Bluebox from './Bluebox'
import Style from './Sartik.module.css'
import useScrollAnimation from '../customHooks/animation';

const Event1 = () => {

    const isVisible = useScrollAnimation(); 

  return (
    <>
    <div   className={Style.bgport}>
    <div className={Style.Event1} >
    <Bluebox  />
    <h1  className={`animated-text ${isVisible ? 'animated' : ''}`}><p className={Style.bigtxt}>Events</p></h1>
   </div>
   </div>
    </>
  )
}

export default Event1
