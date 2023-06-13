import { EventsSelector } from './EventsSelector';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

export const InvitationForm = () => {
    const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    setMessage('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <EventsSelector />
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Enter your message"
          rows={3}
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Button variant="primary" type="submit">
          Send Invitation
        </Button>
      </Form.Group>
    </Form>
  );
};
