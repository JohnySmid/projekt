import  { EventsLoader } from '../actions/EventsActionsLoader';
import { EventPresencesTable } from '../comp/EventPresencesTable';
import { EventsSelector } from '../comp/EventsSelector';
import { InvitationForm } from '../comp/InvitationForm';

import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { useState } from 'react';

import { MyPieChart } from '../comp/EventsPie';
import { UserPieChart } from '../comp/UserPie';

const FirstPage = ({ goToSecondPage, goToThirdPage, event, events }) => {
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
        <br />
        <br />
        <Card>
          <Card.Title>Pie graph presence</Card.Title>
          <Card.Body>
            <th>Event presence</th>
            <MyPieChart data={event.presences} event={event}/>
            <UserPieChart key="89d1f4e4-ae0f-11ed-9bd8-0242ac110002" userId="89d1f4e4-ae0f-11ed-9bd8-0242ac110002"  data={events}/>
            {/* <UserPieChart key={event.id} userId="89d1f4e4-ae0f-11ed-9bd8-0242ac110002" data={event}/> */}
          </Card.Body>
          <Card.Footer>
            <Button  className="btn btn-info" onClick={goToThirdPage}>Statistics Page</Button>
          </Card.Footer>
        </Card>
    </div>
  );
};

const SecondPage = ({goToFirstPage, goToThirdPage, event}) => {
  return (
    <div className='container'>
      <Card>
          <Card.Title>Invatation</Card.Title>
          <Card.Body>
            <InvitationForm data={event}/>
          </Card.Body>
          <Card.Footer>
          <Button className="btn btn-info" onClick={goToFirstPage}>Presence Page</Button>
          </Card.Footer>
        </Card>
    </div>
  );
};

const ThirdPage = ({goToFirstPage, goToSecondPage, event}) => {
  return (
    <div className='container'>
      <Card>
          <Card.Title>Statistics</Card.Title>
          <Card.Body>

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
    const goToThirdPage = () => {
      setCurrentPage('third');
    };
    
    const eventId = useSelector((state) => state.event);
    const events = useSelector((state) => state.events);
      
    const event = events.find((e) => e.id === eventId);

    if (event)
    {
        return (
          <div className='container'>
            {
              currentPage === 'first' ? ( <FirstPage goToSecondPage={goToSecondPage} goToThirdPage={goToThirdPage} event={event} events={events} /> ) : 
              currentPage === 'second' ? ( ( <SecondPage goToFirstPage= {goToFirstPage} goToThirdPage={goToThirdPage} event={event}/> ) ) : 
              ( <ThirdPage goToFirstPage= {goToFirstPage} goToSecondPage={goToSecondPage} event={event}/> )
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