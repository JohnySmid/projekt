import { EventPresencesTable } from '../components/EventPresencesTable';
import { EventsSelector } from '../components/EventsSelector';

import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';

import { MyPieChart } from '../components/EventsPie';
import { UserPieChart } from '../components/UserPie';
import { MembershipPieChart } from '../components/MembershipPie';

import React from 'react';

/**
 * The first page components of the application.
 * @param {Object} props - The component props.
 * @param {function} props.goToSecondPage - Function to navigate to the second page.
 * @param {Object} props.event - The selected event object.
 * @param {Array} props.events - All events data.
 * @returns {JSX.Element} - The rendered first page components.
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
              <MyPieChart data={event.presences} event={event}/>
              <br />
              <br />
              <br />
              <br />
              <UserPieChart key="89d1f4e4-ae0f-11ed-9bd8-0242ac110002" userId="89d1f4e4-ae0f-11ed-9bd8-0242ac110002"  data={events}/>
              <br />
              <br />
              <br />
              <br />
              <MembershipPieChart key="2d9dd1c8-a4a2-11ed-b9df-0242ac120003" groupId="2d9dd1c8-a4a2-11ed-b9df-0242ac120003" data={events}/>
              <br />
              <br />
              <br />
              <br />
            </Card.Body>
          </Card>
      </div>
    );
  };