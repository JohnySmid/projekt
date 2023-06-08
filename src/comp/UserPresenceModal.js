import React, { useState, useEffect } from 'react';
import {Modal, Button} from 'react-bootstrap';
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
          <Modal.Title>Events</Modal.Title>
          {/* <Button onClick={fetchData} disabled={isDataLoaded}>click</Button> */}
        </Modal.Header>
        <Modal.Body>
            <h2>siuu</h2>   
        
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