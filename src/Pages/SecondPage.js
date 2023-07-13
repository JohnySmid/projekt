
import { InvitationForm } from '../components/InvitationForm';

import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';

import React from 'react';

/**
 * componentonent for the second page of the application.
 * Renders an invitation form.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.goToFirstPage - Function to navigate back to the first page.
 * @param {Object} props.event - Event data.
 * @returns {JSX.Element} Second page componentonent JSX.
 */

export const SecondPage = ({goToFirstPage,  event}) => {
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