import React, { useState } from 'react';
import {Button, Form} from 'react-bootstrap';



export const ShowPresenceButton = ({data}) => {
    
    const [presenceTypeName, setPresenceTypeName] = useState(data.presenceType.name)
    const [invatationTypeName, setInvatationTypeName] = useState(data.invitationType.name)

    

    const structurePresence = {
      presence: presenceTypeName,
      invitation: invatationTypeName
    }

    


    return (
      <>     
        <Form>
            <Form.Group>
                <Form.Label>Invitation: {structurePresence.invitation}</Form.Label>
                <br/>
                <Form.Label>Presence: {structurePresence.presence}</Form.Label>
            </Form.Group>
        </Form>
        
        <Button className="btn btn-secondary" onClick={() => {
          setPresenceTypeName(data.presenceType.name);
          setInvatationTypeName(data.invitationType.name);
        }}>
          Update label
        </Button>
      </>
    );
};