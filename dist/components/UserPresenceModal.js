import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Info } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { PresenceType } from '../queries/PresenceTypeQuery';
import { InvatationType } from '../queries/InvatationTypeQuery';
import { PresenceMutationLoader } from '../actions/PresenceUpdateLoader';
import { PresenceButton } from './PresenceButton';
import { ShowPresenceButton } from './ShowPresenceButton';

/**
 * A component that displays a modal for user presence.
 * @function
 * @param {Object} props - The component props.
 * @param {Array} props.data - An array of events data.
 * @returns {JSX.Element} - The rendered modal component.
 */

export const UserPresenceModal = ({
  data
}) => {
  // Modal
  const [show, setShow] = useState(false);
  const [PresenceTypeSetter, setPresenceTypeSetter] = useState([]);
  const [invatationTypeSetter, setinvatationTypeSetter] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  /////////////////////////////////////////////////////
  // Redux
  const dispatch = useDispatch();
  const [presenceType, setPresenceType] = useState(data.presenceType.id);
  const [invatationType, setInvatationType] = useState(data.invitationType.id);

  // Fetching presenceType
  const presenceTypeFetch = () => (dispatch, getState) => PresenceType().then(response => response.json()).then(json => {
    // extract data from presenceTypePage, ? => if data exist, else doesn't create an error
    const PresenceTypeSetter = json.data?.presenceTypePage;
    if (PresenceTypeSetter) {
      setPresenceTypeSetter(PresenceTypeSetter);
      //console.log(presenceType);
    } else {
      console.log("Error ocurred in presenceTypeFetch function for fetching data from database: \n", json);
    }
    return json;
  });

  // Fetching InvatationType
  const invatationTypeFetch = () => (dispatch, getState) =>
  // Call the ProjectsQuery function to fetch projects
  InvatationType().then(response => response.json()).then(json => {
    // extract data from invatationTypePage, ? => if data exist, else doesn't create an error
    const invatationTypeSetter = json.data?.invitationTypePage;
    if (invatationTypeSetter) {
      setinvatationTypeSetter(invatationTypeSetter);
      //console.log(invatationTypeSetter);
    } else {
      console.log("Error ocurred in invatationTypeFetch function for fetching data from database: \n", json);
    }
    return json;
  });
  const structurePresence = {
    presenceId: data.id,
    lastchange: data.lastchange,
    presenceTypeId: presenceType,
    invitationTypeId: invatationType
  };
  const structurePresenceType = PresenceTypeSetter.map(type => {
    if (type.id) {
      return {
        typeId: type.id,
        typeName: type.name
      };
    }
    return null;
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-dark rounded-circle",
    onClick: () => {
      handleShow();
      dispatch(presenceTypeFetch());
      dispatch(invatationTypeFetch());
    }
  }, /*#__PURE__*/React.createElement(Info, null)), /*#__PURE__*/React.createElement(Modal, {
    show: show,
    onHide: handleClose
  }, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, "User")), /*#__PURE__*/React.createElement(Modal.Body, null, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Label, null, "Invatation:"), /*#__PURE__*/React.createElement(Form.Select, {
    value: structurePresence.invitationTypeId,
    onChange: e => {
      setInvatationType(e.target.value);
    }
  }, invatationTypeSetter.map(type => {
    if (type.name) {
      return /*#__PURE__*/React.createElement("option", {
        key: type.id,
        value: type.id
      }, type.name);
    }
    return null;
  })))), /*#__PURE__*/React.createElement("br", null), " ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Form.Label, null, "Presence:"), /*#__PURE__*/React.createElement(Form.Select, {
    value: structurePresence.presenceTypeId,
    onChange: e => {
      setPresenceType(e.target.value);
    }
  }, PresenceTypeSetter && PresenceTypeSetter.map(type => {
    if (type.id) {
      return /*#__PURE__*/React.createElement("option", {
        key: type.id,
        value: type.id
      }, type.name);
    }
    return null;
  }))), /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(ShowPresenceButton, {
    data: data
  })), /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(PresenceButton, {
    btnname: structurePresenceType[0]?.typeName,
    presenceId: structurePresence.presenceId,
    lastchange: structurePresence.lastchange,
    presenceTypeId: structurePresenceType[0]?.typeId,
    invitationTypeId: invatationType
  }), /*#__PURE__*/React.createElement(PresenceButton, {
    btnname: structurePresenceType[1]?.typeName,
    presenceId: structurePresence.presenceId,
    lastchange: structurePresence.lastchange,
    presenceTypeId: structurePresenceType[1]?.typeId,
    invitationTypeId: invatationType
  }), /*#__PURE__*/React.createElement(PresenceButton, {
    btnname: structurePresenceType[2]?.typeName,
    presenceId: structurePresence.presenceId,
    lastchange: structurePresence.lastchange,
    presenceTypeId: structurePresenceType[2]?.typeId,
    invitationTypeId: invatationType
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-dark",
    onClick: () => {
      handleClose();
    }
  }, "Close"), /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-blue",
    onClick: () => {
      dispatch(PresenceMutationLoader({
        presenceId: structurePresence.presenceId,
        lastchange: structurePresence.lastchange,
        presenceTypeId: structurePresence.presenceTypeId,
        invitationTypeId: structurePresence.invitationTypeId
      }));
    }
  }, "Push"))));
};