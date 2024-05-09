// import Style from './about1.module.css'

// export const About3 = () => {

//   const reveal = () => {
//     // Select all elements with the class "reveal"
//     const elements = document.querySelectorAll('.reveal');

//     // Loop through each element
//     elements.forEach((element) => {
//       // Get the top position of the element relative to the viewport
//       const top = element.getBoundingClientRect().top;

//       // Get the height of the window
//       const windowHeight = window.innerHeight;

//       // Define a reveal point (150 pixels from the bottom of the viewport)
//       const revealPoint = windowHeight - 150;

//       // Add the "active" class if the element is within the reveal point
//       if (top < revealPoint) {
//         element.classList.add('active');
//       }
//     });
//   };

//   // Add event listener to reveal elements on scroll
//   window.addEventListener('scroll', reveal);

//   return (
//     <>
//     <div className={Style.about3} >
//      <div>
//         <h2 className={Style.h2} >Vision</h2>
//         <p className={Style.p2} ><span className={Style.span}>Beyond Boundries</span> strives to build working partnerships based on trust in our  ability to listen to our client’s needs and execute to meet or exceed those needs. Our ultimate vision is to generate a good turnaround for our potential and valuable clients. We provide effective and comprehensive solutions to our clients and communities with which we deal.</p>
//         </div>
//         <div>
//         <h2 className={Style.h2} >Mission</h2>
//         <p className={Style.p2} ><span className={Style.span}>Our purpose</span> is to assist individuals and businesses in achieving their objectives in order to become the preferred employer and staffing supplier.<br></br>
//         <span className={Style.span}> Our mission</span> is to draw in, hold on to, and develop talent by fostering a culture that values achievement, advances careers, fosters communication, and keeps its word. Our workers’extraordinary skill and extensive experience will be a game-changer for your company.</p>
//           </div>
//           <div>
//         <h2 className={Style.h2}>Strategy</h2>
//         <p className={Style.p2} > <span className={Style.span}>Beyond Boundries </span>is a firm that provides staffing solutions for any technology, and it was created by  a team of seasoned IT professionals. This trust has motivated them to run ConvexTech to give high-quality services to our  customers. To avoid any issues during our client meetings, our team is focused on openness and integrity.</p>
//     </div>
//     </div>
//     </>
//   );
// };


import  { useEffect } from 'react';
import Style from './about1.module.css';

export const About3 = () => {
  const reveal = () => {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach((element) => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const revealPoint = windowHeight - 150;

      if (top < revealPoint) {
        element.classList.add('active');
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', reveal);

    return () => {
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <div className={Style.about3}>
      <div className={`${Style.content} ${Style.vision}`}>
        <h2 className={Style.h2}>Vision</h2>
        <p className={Style.p2}>
          <span className={Style.span}>Beyond Boundaries</span> strives to build
          working partnerships based on trust in our ability to listen to our
          client's needs and execute to meet or exceed those needs. Our ultimate
          vision is to generate a good turnaround for our potential and valuable
          clients. We provide effective and comprehensive solutions to our clients
          and communities with which we deal.
        </p>
      </div>
      <div className={`${Style.content} ${Style.mission}`}>
        <h2 className={Style.h2}>Mission</h2>
        <p className={Style.p2}>
          <span className={Style.span}>Our purpose</span> is to assist
          individuals and businesses in achieving their objectives in order to
          become the preferred employer and staffing supplier.<br />
          <span className={Style.span}>Our mission</span> is to draw in, hold
          onto, and develop talent by fostering a culture that values
          achievement, advances careers, fosters communication, and keeps its
          word. Our workers' extraordinary skill and extensive experience will be
          a game-changer for your company.
        </p>
      </div>
      <div className={`${Style.content} ${Style.strategy}`}>
        <h2 className={Style.h2}>Strategy</h2>
        <p className={Style.p2}>
          <span className={Style.span}>Beyond Boundaries</span> is a firm that
          provides staffing solutions for any technology, and it was created by
          a team of seasoned IT professionals. This trust has motivated them
          to run ConvexTech to give high-quality services to our customers. To
          avoid any issues during our client meetings, our team is focused on
          openness and integrity.
        </p>
      </div>
    </div>
  );
};

