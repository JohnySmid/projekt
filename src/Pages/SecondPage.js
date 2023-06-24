
import { InvitationForm } from '../comp/InvitationForm';

import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';


export const SecondPage = ({goToFirstPage, goToThirdPage, event}) => {
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