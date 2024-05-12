import  { useState, useEffect } from 'react';
import axios from 'axios';
import Style from'./Sartik.module.css'


interface eventcard{
    id:number;
    image:string;
    title:string;
    discription:string;
}

const EventCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://gomti-script-021.onrender.com/events');
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchData();
  }, []);

  return (
    // <figure className={Style.eventcard}>
    //   {events.map((event:eventcard) => (
       
    //     <>   <img src={event.image} alt={event.title}  style={{gridArea:'{event.image}'}} className={Style.carditem}/>
    //          <figcaption>
    //               <h5>{event.title}</h5>
    //               <p>{event.discription}</p>
    //               <p>{event.date}</p>
    //           </figcaption>
    //     </>
   
  <div style={{display:'flex',color:'white', justifyContent:'space-around', flexWrap:"wrap",gap:"6px", backgroundColor:'#bee0f0'}} >
       
            {events.map((event:eventcard) => (
              //  if({event.title}%2==0){
            <div style={{backgroundImage:`url(${event.image})` ,color:'white',height:"230px" , width:"33vw" ,backgroundRepeat:'no-repeat',paddingTop:"160px",paddingLeft:"20px" ,backgroundSize:'cover', backgroundPosition:'center'}}  className={Style.hovereve}>
                 <h2 style={{fontWeight:"bold"}}>{event.title}</h2>
                 <p>{event.discription}</p>
              
          </div>

         ))}

</div>



   
  );
};

export default EventCard;
