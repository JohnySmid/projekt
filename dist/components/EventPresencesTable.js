import { UserPresenceModal } from './UserPresenceModal';
import React from 'react';

/**
 * A component that displays a table of presences for an event.
 * @function
 * @param {Object} props - The component props.
 * @param {Array} props.data - The data containing events information.
 * @returns {JSX.Element} - The rendered table component.
 */

// Komponenta pro zobrazení tabulky přítomností na události
export const EventPresencesTable = ({
  data
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("table", {
    className: "table table-hover table-light table-bordered"
  }, /*#__PURE__*/React.createElement("thead", {
    className: "table-dark"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Surname"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Invitation"), /*#__PURE__*/React.createElement("th", null, "Presence"), /*#__PURE__*/React.createElement("th", null, "Info"))), /*#__PURE__*/React.createElement("tbody", null, data.map(presence => /*#__PURE__*/React.createElement(EventPresenceRow, {
    key: presence.id,
    presence: presence
  })))));
};

/**
 * A component that represents a row in the event presences table.
 * @param {Object} presence - The presence object containing user information.
 * @returns {JSX.Element} - The rendered table row component.
 */

// Komponenta pro řádek v tabulce přítomností na události
const EventPresenceRow = ({
  presence
}) => {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, presence.user.name), /*#__PURE__*/React.createElement("td", null, presence.user.surname), /*#__PURE__*/React.createElement("td", null, presence.user.email), /*#__PURE__*/React.createElement("td", null, presence.invitationType.name), /*#__PURE__*/React.createElement("td", null, presence.presenceType.name), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(UserPresenceModal, {
    data: presence
  })));
};