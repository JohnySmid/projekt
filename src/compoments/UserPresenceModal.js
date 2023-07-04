import React, { useState } from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import { Info } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { PresenceType } from '../queries/PresenceTypeQuery';
import { InvatationType } from '../queries/InvatationTypeQuery';
import { PresenceMutationLoader } from '../actions/PresenceUpdateLoader';
import { PresenceButton } from './PresenceButton';
import { ShowPresenceButton } from './ShowPresenceButton';

/**
 * A component that displays a modal for user presence.
 * @param {Object} props - The component props.
 * @param {Array} props.data - An array of presence data.
 * @returns {JSX.Element} - The rendered modal component.
 */

export const UserPresenceModal = ({data}) => {
      // Modal
    const [show, setShow] = useState(false)
    const [PresenceTypeSetter, setPresenceTypeSetter] = useState([])
    const [invatationTypeSetter, setinvatationTypeSetter] = useState([])

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  /////////////////////////////////////////////////////
  // Redux
    const dispatch = useDispatch()
    const [presenceType, setPresenceType] = useState(data.presenceType.id)
    const [invatationType, setInvatationType] = useState(data.invitationType.id)

    // Fetching presenceType
    const presenceTypeFetch = () => (dispatch, getState) => (
      PresenceType()
        .then(response => response.json())
        .then(json => {
          // extract data from presenceTypePage, ? => if data exist, else doesn't create an error
          const PresenceTypeSetter = json.data?.presenceTypePage
          if (PresenceTypeSetter) {
            setPresenceTypeSetter(PresenceTypeSetter)
            //console.log(presenceType);
          } else {
            console.log("Error ocurred in presenceTypeFetch function for fetching data from database: \n", json)
          }
          return json
        })
    )
    
    // Fetching InvatationType
    const invatationTypeFetch = () => (dispatch, getState) => (
      // Call the ProjectsQuery function to fetch projects
      InvatationType()
        .then(response => response.json())
        .then(json => {
          // extract data from invatationTypePage, ? => if data exist, else doesn't create an error
          const invatationTypeSetter = json.data?.invitationTypePage
          if (invatationTypeSetter) {
            setinvatationTypeSetter(invatationTypeSetter)
            //console.log(invatationTypeSetter);
          } else {
            console.log("Error ocurred in invatationTypeFetch function for fetching data from database: \n", json)
          }
          return json
        })
    )

    const structurePresence = {
      presenceId: data.id,
      lastchange: data.lastchange,
      presenceTypeId: presenceType,
      invitationTypeId: invatationType
    }

    const structurePresenceType = PresenceTypeSetter.map((type) => {
      if (type.id) {
        return { typeId: type.id, typeName: type.name };
      }
      return null;
    });



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
                        <Form.Select value={structurePresence.invitationTypeId} onChange={(e) => {setInvatationType(e.target.value)}}>
                        {
                            invatationTypeSetter.map((type) => {
                              if (type.name) {
                                return <option key={type.id} value={type.id}>{type.name}</option>;
                              }
                              return null;
                            })
                          }
                        </Form.Select>
                      </div>
                  </Form.Group>
                  <br /> <br />
                  <Form.Group>  
                    <div>
                      <Form.Label>Presence:</Form.Label>
                      <Form.Select value={structurePresence.presenceTypeId} onChange={(e) => {setPresenceType(e.target.value)}}>
                      {
                          PresenceTypeSetter && PresenceTypeSetter.map((type) => {
                            if (type.id) {
                              return <option key={type.id} value={type.id}>{type.name}</option>;
                            }
                            return null;
                          })
                        }
                      </Form.Select>
                    </div>
                    <br />
                </Form.Group>
                <Form.Group>
                        <ShowPresenceButton data={data}/>
                </Form.Group>  
                <Form.Group>
                  <br />
                        <PresenceButton btnname={structurePresenceType[0]?.typeName}
                                        presenceId={structurePresence.presenceId} 
                                        lastchange={structurePresence.lastchange}
                                        presenceTypeId={structurePresenceType[0]?.typeId}
                                        invitationTypeId={invatationType}                      
                        />
                        <PresenceButton btnname={structurePresenceType[1]?.typeName}
                                        presenceId={structurePresence.presenceId} 
                                        lastchange={structurePresence.lastchange}
                                        presenceTypeId={structurePresenceType[1]?.typeId}
                                        invitationTypeId={invatationType}                      
                        />
                        <PresenceButton btnname={structurePresenceType[2]?.typeName}
                                        presenceId={structurePresence.presenceId} 
                                        lastchange={structurePresence.lastchange}
                                        presenceTypeId={structurePresenceType[2]?.typeId}
                                        invitationTypeId={invatationType}                      
                        />
            
                </Form.Group> 
            </Form>      
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-dark" onClick={() => {
              handleClose();
            }}>
              Close
            </Button>
            <Button className="btn btn-blue" onClick={() => {
              dispatch(PresenceMutationLoader({presenceId: structurePresence.presenceId, 
                                              lastchange: structurePresence.lastchange, 
                                              presenceTypeId: structurePresence.presenceTypeId, 
                                              invitationTypeId: structurePresence.invitationTypeId}));
            }}>
              Push
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
};