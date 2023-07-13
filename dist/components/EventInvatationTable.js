import { InviteUserButton } from "./InviteUserButton";
import { useSelector } from "react-redux";
import React from 'react';

/**
 * A component that displays a table of event invitations.
 * @function
 * @param {Object} props - The component props.
 * @param {Array} props.data - The data containing events information.
 * @returns {JSX.Element} - The rendered table component.
 */

// Komponenta pro zobrazení tabulky pozvánek na událost
export const EventInvitationTable = ({
  data
}) => {
  // Získání hodnoty 'eventId' ze stavu Redux pomocí hooku 'useSelector'
  const eventId = useSelector(state => state.event);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "table table-hover table-light table-bordered"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table-dark"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Surname"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Invite"))), /*#__PURE__*/React.createElement("tbody", null, data.map(presence => /*#__PURE__*/React.createElement(EventInvitationRow, {
    key: presence.id,
    presence: presence,
    eventId: eventId
  })))));
};

/**
 * A component that represents a row in the event invitation table.
 * @param {Object} presence - The presence object containing user information.
 * @param {string} eventId - The ID of the event.
 * @returns {JSX.Element} - The rendered table row component.
 */

// Komponenta pro řádek v tabulce pozvánek na událost
const EventInvitationRow = ({
  presence,
  eventId
}) => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, presence.user.name), /*#__PURE__*/React.createElement("td", null, presence.user.surname), /*#__PURE__*/React.createElement("td", null, presence.user.email), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(InviteUserButton, {
    eventId: eventId,
    userId: presence.user.id
  })));
};