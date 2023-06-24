import  { EventsLoader } from '../actions/EventsDataLoader';
import { EventsSelector } from '../comp/EventsSelector';
import { useSelector } from 'react-redux';

import Card from "react-bootstrap/Card";
import { useState } from 'react';


import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';

// const FirstPage = ({ goToSecondPage, goToThirdPage, event, events }) => {
//   return (
//     <div className='container'>
//         <Card>
//           <Card.Title>Presence</Card.Title>
//           <Card.Body>
//             <EventsSelector />
//             <EventPresencesTable key={event.id} data={event.presences}/>
//           </Card.Body>
//           <Card.Footer>
//             <Button  className="btn btn-info" onClick={goToSecondPage}>Invatation Page</Button>
//           </Card.Footer>
//         </Card>
//         <br />
//         <br />
//         <Card>
//           <Card.Title>Pie graph presence</Card.Title>
//           <Card.Body>
//             <th>Event presence</th>
//             <MyPieChart data={event.presences} event={event}/>
//             <br/>
//             <UserPieChart key="89d1f4e4-ae0f-11ed-9bd8-0242ac110002" userId="89d1f4e4-ae0f-11ed-9bd8-0242ac110002"  data={events}/>
//             <br/>
//             <MembershipPieChart key="2d9dd1c8-a4a2-11ed-b9df-0242ac120003" groupId="2d9dd1c8-a4a2-11ed-b9df-0242ac120003" data={events}/>
//             <br/>
//           </Card.Body>
//           <Card.Footer>
//             <Button  className="btn btn-info" onClick={goToThirdPage}>Statistics Page</Button>
//           </Card.Footer>
//         </Card>
//     </div>
//   );
// };

// const SecondPage = ({goToFirstPage, goToThirdPage, event}) => {
//   return (
//     <div className='container'>
//       <Card>
//           <Card.Title>Invatation</Card.Title>
//           <Card.Body>
//             <InvitationForm data={event}/>
//           </Card.Body>
//           <Card.Footer>
//           <Button className="btn btn-info" onClick={goToFirstPage}>Presence Page</Button>
//           </Card.Footer>
//         </Card>
//     </div>
//   );
// };



export const FrontPage = () => {
    const [currentPage, setCurrentPage] = useState('first');
    const goToSecondPage = () => {
      setCurrentPage('second')
    }
    const goToFirstPage = () => {
      setCurrentPage('first')
    }

    
    const eventId = useSelector((state) => state.event)
    const events = useSelector((state) => state.events)
      
    const event = events.find((e) => e.id === eventId)

    if (event) {
      return (
        <div className='container'>
          {
            currentPage === 'first' ? (
              <FirstPage goToSecondPage={goToSecondPage} event={event} events={events} />
            ) : currentPage === 'second' ? (
              <SecondPage goToFirstPage={goToFirstPage} event={event} />
            ) : null
          }
        </div>
      );
    } else {
      console.log('Event data not found...')
      return (
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