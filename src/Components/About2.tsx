import useScrollAnimation from '../customHooks/animation';
import Bluebox from './Bluebox';
import Style from './about1.module.css'

export const About2 = () => {
  const isVisible = useScrollAnimation();
  return (
    <> 
    <div className={`animated-text ${isVisible ? 'animated' : ''}`}>
      <div className={Style.about2}>
    <div className={Style.containavout2}>
     
        <h1  className={Style.h1}><span><Bluebox /></span>About Us</h1>
        <p  className={Style.p}><span className={Style.span}>Beyond Boundries </span>is a specialist staffing, recruiting, and consulting company that works
         non-IT, engineering, and healthcare sectors. We are also into Software Development. We 
        worked in every industry for more than ten years. Our widespread presence across the 
         attests to our reliability and value across all sectors. We serve our clients all over the 
         of-the-art services. Our esteemed clients always receive the finest from our devoted and 
         committed team of specialists operating in the US, Pakistan, and India. We provide our  
        clients with shrewd and customized solutions.<br></br><span>Beyond Boundaries</span> is a firm that
          provides staffing solutions for any technology, and it was created by
          a team of seasoned IT professionals. This trust has motivated them
          to run Beyond Boundries to give high-quality services to our customers. To
          avoid any issues during our client meetings, our team is focused on
          openness and integrity.</p>
    </div>
    <div>
        <img className={Style.img} src="https://picjj.com/images/2024/05/14/7NTOY.webp" alt =""></img>
    </div>
    </div>
    </div>
    </>
  );
};
