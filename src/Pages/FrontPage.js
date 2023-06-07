import  { EventsLoader } from '../actions/EventsActionsLoader';
import { EventPresencesTable } from '../comp/EventPresencesTable';
import { EventsSelector } from '../comp/EventsSelector';
import { useSelector } from 'react-redux';





export const FrontPage = () => {
      const eventId = useSelector((state) => state.event);
      const events = useSelector((state) => state.events);
      
     const event = events.find((e) => e.id === eventId);
    
    // console.log("frontpage data", data);
      // selector pro filtr data, ktere jdou do 
  if (event)
  {
      return (
       <div className="container">
        <EventsSelector />
        <EventPresencesTable key={event.id} data={event.presences}/>
       </div>
      );
  }
  else{
    return(
      <div className="container">
    < EventsLoader />
    <EventsSelector />
    </div>
    )
  }
}