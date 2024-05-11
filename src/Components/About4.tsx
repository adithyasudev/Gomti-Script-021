 import Style from './about1.module.css'
import tushar from './images/tushar.jpg'
  import sartiku from './images/sartiku.jpg'
  import adityas from './images/AdityaS.jpg'
  import kajakk from './images/kajalk.jpg'
  import sourav from './images/sourav.jpg'
import Bluebox from './Bluebox'
import useScrollAnimation from '../customHooks/animation'
  

export const About4 = () => {
  const isVisible = useScrollAnimation();

  return (
    <>
    <div className={`animated-text ${isVisible ? 'animated' : ''}`}>
    <div className={Style.about4}>
<div className={Style.team} >
       <h3><span><Bluebox /></span>Say Hello To Team</h3>
</div>
   
        <div className={Style.collage}>
          {/* aditya profile */}
       <div className={Style.collageitem}>
        <div className={Style.teamimg}>
       <img className={Style.collageitemimg} src={adityas} alt="aditya" />
      </div>
      <div className={Style.teaminfo}>
          <h2>Aditya Suhdev</h2>
          <span>Team Leader</span>
          <div className={Style.teamsocial}>
            <div  className={Style.mail}>
            <a   href="mailto:adithyasudev28@gmail.com">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/mail.png" alt="Email"></img>
            </a></div>
            <a href="https://www.linkedin.com/in/adithya-s-7a7553151/">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
      </div>

 {/* sartik profile */}

 <div className={Style.collageitem}>
        <div className={Style.teamimg}>
       <img className={Style.collageitemimg} src={sartiku} alt="aditya" />
      </div>
      <div className={Style.teaminfo}>
          <h2>Sartik</h2>
          <span>Team Member</span>
          <div className={Style.teamsocial}>
            <a href="mailto:sharmasartik@gmail.com">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/mail.png" alt="Email"></img>
            </a>
            <a href="https://www.linkedin.com/in/sartik-sharma-ab2152221/">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
      </div>

     {/* kajal profile */}
     <div className={Style.collageitem}>
        <div className={Style.teamimg}>
       <img className={Style.collageitemimg} src={kajakk} alt="aditya" />
      </div>
      <div className={Style.teaminfo}>
          <h2>Kajal Kumari</h2>
          <span>Team Member</span>
          <div className={Style.teamsocial}>
            <a href="mailto:Kajalkumari1235669@gmail.com">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/mail.png" alt="Email"></img>
            </a>
            <a href="https://www.linkedin.com/in/kajalkumari03/">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
      </div>
      {/* tushar profile */}
      <div className={Style.collageitem}>
        <div className={Style.teamimg}>
       <img className={Style.collageitemimg} src={tushar} alt="aditya" />
      </div>
      <div className={Style.teaminfo}>
          <h2>Tushar</h2>
          <span>Team Member</span>
          <div className={Style.teamsocial}>
            <a href="mailto:tusharbish0216@gmail.com">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/mail.png" alt="Email"></img>
            </a>
            <a href="https://www.linkedin.com/in/tushar-bisht-84656829a/">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
      </div>
      {/* sourav profile */}
      <div className={Style.collageitem}>
        <div className={Style.teamimg}>
       <img className={Style.collageitemimg} src={sourav} alt="sourav" />
      </div>
      <div className={Style.teaminfo}>
          <h2>Sourabh Rawat</h2>
          <span>Team Member</span>
          <div className={Style.teamsocial}>
            <a href="mailto:sourabhrawar77200@gmail.com">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/mail.png" alt="Email"></img>
            </a>
            <a href="www.linkedin.com/in/sourabh-rawat-123a81194">
              <img decoding="async" src="https://convextech.com/wp-content/uploads/2022/07/linkedin.png" alt="LinkedIn"></img>
            </a>
          </div>
        </div>
      </div>
     </div>
     </div>
     </div>
   </>
 )
}

