import  { EventsLoader } from '../actions/EventsActionsLoader';
import { EventPresencesTable } from '../comp/EventPresencesTable';
import { EventsSelector } from '../comp/EventsSelector';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";






export const FrontPage = () => {
    const eventId = useSelector((state) => state.event);
    const events = useSelector((state) => state.events);
      
    const event = events.find((e) => e.id === eventId);

    if (event)
    {
        return (
          <div className="container">
            <Card>
              <Card.Title>Events</Card.Title>
              <Card.Body>
                <EventsSelector />
                <EventPresencesTable key={event.id} data={event.presences}/>
              </Card.Body>
            </Card>
          </div>
        );
    }
    else{
      return(
        <div className="container">
          <Card>
              <Card.Title>Events</Card.Title>
              <Card.Body>
                <EventsLoader />
                <EventsSelector />
              </Card.Body>
            </Card>
      </div>
      )
    }
}