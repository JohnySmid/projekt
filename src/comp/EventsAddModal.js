import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {Modal, Form, Button} from 'react-bootstrap';

import { EventsTypePageQuery } from '../queries/EventsTypeQuery';
import { loadData } from '../reducers/EventsSlicer';

export const EventsAddModal = () => {
    // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
/////////////////////////////////////////////////////

  const [EventName, setEventName] = useState("");
  const [name, setEventTypeIDName] = useState("");

  // Fetch events
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const fetchData = async () => {
    try {
      const response = await EventsTypePageQuery();
      const data = await response.json();
      if(dispatch(loadData(data.data.eventTypePage)))
      {
        console.log("lock N' loaded");
      }
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Events</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" onChange={(props) => setEventName((props).target.value)}>
                    <Form.Label>Event Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter event name" />
                </Form.Group>
                <Form.Group className="mb-3" onChange={(props) => setEventTypeIDName((props).target.value)}>
                    <Form.Label>Event Type</Form.Label>
                    <Form.Select>
                        <option value="">Aaa</option>
                    </Form.Select>
                </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose && console.log(EventName)}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}