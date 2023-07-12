import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

/**
 * A component that displays a updated presenceType and InvitationType in labels using update button.
 * @function
 * @param {Object} props - The component props.
 * @param {Array} props.data - Data object containing presence and invitation type information.
 * @returns {JSX.Element} ShowPresenceButton component.
 */

export const ShowPresenceButton = ({ data }) => {
  const [presenceTypeName, setPresenceTypeName] = useState(data.presenceType.name);
  const [invitationTypeName, setInvitationTypeName] = useState(data.invitationType.name);

  const structurePresence = {
    presence: presenceTypeName,
    invitation: invitationTypeName,
  };

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Invitation: {structurePresence.invitation}</Form.Label>
          <br />
          <Form.Label>Presence: {structurePresence.presence}</Form.Label>
        </Form.Group>
      </Form>

      <Button className="btn btn-secondary" onClick={() => {
        setPresenceTypeName(data.presenceType.name)
        setInvitationTypeName(data.invitationType.name)
      }}>
        Update label
      </Button>
    </>
  );
};
