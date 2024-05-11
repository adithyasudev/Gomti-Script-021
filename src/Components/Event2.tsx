import  { useState, useEffect } from 'react';
import axios from 'axios';
import Style from'./Sartik.module.css'


interface eventcard{
    id:number;
    image:string;
    title:string;
    discription:string;
    date:string;
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
      <div>
         {events.map((event:eventcard) => (
          <div style={{backgroundImage:`url(${event.image})`}}>

          </div>

        
         ))}

</div>



   
  );
};

export default EventCard;
