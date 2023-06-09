import React, { useState, useEffect } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { Info } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { PresenceType } from '../queries/PresenceTypeQuery';
import { InvatationType } from '../queries/InvatationTypeQuery';


export const UserPresenceModal = () => {
    // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
/////////////////////////////////////////////////////
  const dispatch = useDispatch();
  const [presenceType, setPresenceType] = useState();
  const [invatationType, setInvatationType] = useState();

  // Fetching presenceType
  const presenceTypeFetch = () => (dispatch, getState) => {
    PresenceType()
      .then(response => response.json())
      .then(json => {
        // extract data from presenceTypePage, ? => if data exist, else doesn't create an error
        const presenceType = json.data?.presenceTypePage
        if (presenceType) {
          setPresenceType(presenceType)
          //console.log(presenceType);
        } else {
          console.log("Error ocurred in presenceTypeFetch function for fetching data from database: \n", console.error());
        }
        return json
      })
  }
  // Fetching InvatationType
  const invatationTypeFetch = () => (dispatch, getState) => {
    // Call the ProjectsQuery function to fetch projects
    InvatationType()
      .then(response => response.json())
      .then(json => {
        // extract data from invatationTypePage, ? => if data exist, else doesn't create an error
        const invatationType = json.data?.invitationTypePage
        if (invatationType) {
          setInvatationType(invatationType)
          console.log(invatationType);
        } else {
          console.log("Error ocurred in invatationTypeFetch function for fetching data from database: \n", console.error());
        }
        return json
      })
  }

  
  return (
    <>
      <Button className="btn btn-dark rounded-circle" onClick={() => {
    handleShow();
    dispatch(presenceTypeFetch());
    dispatch(invatationTypeFetch());
}}>
        <Info />
      </Button>

      <Modal show={show} onHide={handleClose}>  
        <Modal.Header>
          <Modal.Title>User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
                    <div>
                      <Form.Label>Invatation:</Form.Label>
                      <Form.Select>
                      {
                          invatationType && invatationType.map((type) => {
                            if (type.name) {
                              return <option key={type.id} value={type.id}>{type.name}</option>;
                            }
                            return null;
                          })
                        }
                      </Form.Select>
                    </div>
                    <br />
                    <div>
                      <Button className="btn btn-success">
                        Change invatation
                      </Button>
                    </div>
                </Form.Group>
                <br /> <br />
                <Form.Group>
                  <div>
                    <Form.Label>Presence:</Form.Label>
                    <Form.Select>
                    {
                        presenceType && presenceType.map((type) => {
                          if (type.name) {
                            return <option key={type.id} value={type.id}>{type.name}</option>;
                          }
                          return null;
                        })
                      }
                    </Form.Select>
                  </div>
                  <br />
                  <div>
                    <Button className="btn btn-warning">
                      Change presence
                    </Button>
                  </div>
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