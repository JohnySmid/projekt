import { EventPresencesTable } from '../compoments/EventPresencesTable';
import { EventsSelector } from '../compoments/EventsSelector';

import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';

import { MyPieChart } from '../compoments/EventsPie';
import { UserPieChart } from '../compoments/UserPie';
import { MembershipPieChart } from '../compoments/MembershipPie';

/**
 * The first page compomentsonentonent of the application.
 ** @param {Object} props - The component props.
 * @param {function} props.goToSecondPage - Function to navigate to the second page.
 * @param {Object} props.event - The selected event object.
 * @param {Array} props.events - All events data.
 * @returns {JSX.Element} - The rendered first page compomentsonentonent.
 */

export const FirstPage = ({ goToSecondPage, event, events }) => {
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
              <br/>
              <UserPieChart key="89d1f4e4-ae0f-11ed-9bd8-0242ac110002" userId="89d1f4e4-ae0f-11ed-9bd8-0242ac110002"  data={events}/>
              <br/>
              <MembershipPieChart key="2d9dd1c8-a4a2-11ed-b9df-0242ac120003" groupId="2d9dd1c8-a4a2-11ed-b9df-0242ac120003" data={events}/>
              <br/>
            </Card.Body>

          </Card>
      </div>
    );
  };