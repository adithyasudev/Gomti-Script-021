import Style from './about1.module.css'

export const About2 = () => {
  return (
    <><div className={Style.about2}>
    <div>
        <h1 className={Style.h1}>About Us</h1>
        <p className={Style.p}><span className={Style.span}>Beyond Boundries </span>is a specialist staffing, recruiting, and consulting company that works
         non-IT, engineering, and healthcare sectors. We are also into Software Development. We 
        worked in every industry for more than ten years. Our widespread presence across the 
         attests to our reliability and value across all sectors. We serve our clients all over the 
         of-the-art services. Our esteemed clients always receive the finest from our devoted and 
         committed team of specialists operating in the US, Pakistan, and India. We provide our  
        clients with shrewd and customized solutions.</p>
    </div>
    <div>
        <img className={Style.img} src="https://convextech.com/wp-content/uploads/2022/07/shape.png" alt =""></img>
    </div>
    </div>
    </>
  );
};
