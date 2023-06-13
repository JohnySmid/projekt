import  { EventsLoader } from '../actions/EventsActionsLoader';
import { EventPresencesTable } from '../comp/EventPresencesTable';
import { EventsSelector } from '../comp/EventsSelector';
import { InvitationForm } from '../comp/InvitationForm';

import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { useState } from 'react';

const FirstPage = ({ goToSecondPage, event }) => {
  return (
    <div className='container'>
        <Card>
          <Card.Title>Presence</Card.Title>
          <Card.Body>
            <EventsSelector />
            <EventPresencesTable key={event.id} data={event.presences}/>
          </Card.Body>
          <Card.Footer>
            <Button  className="btn btn-info" onClick={goToSecondPage}>Invatation Page</Button>
          </Card.Footer>
        </Card>
    </div>
  );
};

const SecondPage = ({goToFirstPage}) => {
  return (
    <div className='container'>
      <Card>
          <Card.Title>Invatation</Card.Title>
          <Card.Body>
            <InvitationForm/>
          </Card.Body>
          <Card.Footer>
          <Button className="btn btn-info" onClick={goToFirstPage}>Presence Page</Button>
          </Card.Footer>
        </Card>
    </div>
  );
};

export const FrontPage = () => {
    const [currentPage, setCurrentPage] = useState('first');
    const goToSecondPage = () => {
      setCurrentPage('second');
    };
    const goToFirstPage = () => {
      setCurrentPage('first');
    };
    
    const eventId = useSelector((state) => state.event);
    const events = useSelector((state) => state.events);
      
    const event = events.find((e) => e.id === eventId);

    if (event)
    {
        return (
          <div className='container'>
            {
              currentPage === 'first' ? ( <FirstPage goToSecondPage={goToSecondPage} event={event} /> ) : 
              ( <SecondPage goToFirstPage= {goToFirstPage}/> )
            }
          </div>
          
        );
    } else {
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
      );
    }
}