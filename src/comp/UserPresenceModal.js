import React, { useState, useEffect } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { Info } from 'react-bootstrap-icons';


export const UserPresenceModal = () => {
    // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
/////////////////////////////////////////////////////



  
  return (
    <>
      <Button className="btn btn-dark rounded-circle" onClick={handleShow}>
        <Info />
      </Button>

      <Modal show={show} onHide={handleClose}>  
        <Modal.Header>
          <Modal.Title>User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                <Form.Label>Invatation</Form.Label>
                <Form.Label>Presence</Form.Label>
                <Form.Group>
                    <Form.Select>
                        <option>jj</option>
                        <option>k</option>
                    </Form.Select>
                </Form.Group>
          </Form> 
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}