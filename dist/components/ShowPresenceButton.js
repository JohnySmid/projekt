import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

/**
 * A component that displays a updated presenceType and InvitationType in labels using update button.
 * @function
 * @param {Object} props - The component props.
 * @param {Array} props.data - Data object containing presence and invitation type information.
 * @returns {JSX.Element} ShowPresenceButton component.
 */

export const ShowPresenceButton = ({
  data
}) => {
  const [presenceTypeName, setPresenceTypeName] = useState(data.presenceType.name);
  const [invitationTypeName, setInvitationTypeName] = useState(data.invitationType.name);
  const structurePresence = {
    presence: presenceTypeName,
    invitation: invitationTypeName
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form, null, /*#__PURE__*/React.createElement(Form.Group, null, /*#__PURE__*/React.createElement(Form.Label, null, "Invitation: ", structurePresence.invitation), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Form.Label, null, "Presence: ", structurePresence.presence))), /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-secondary",
    onClick: () => {
      setPresenceTypeName(data.presenceType.name);
      setInvitationTypeName(data.invitationType.name);
    }
  }, "Update label"));
};