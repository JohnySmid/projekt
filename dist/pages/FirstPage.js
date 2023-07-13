import { EventPresencesTable } from '../compoments/EventPresencesTable';
import { EventsSelector } from '../compoments/EventsSelector';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import { MyPieChart } from '../compoments/EventsPie';
import { UserPieChart } from '../compoments/UserPie';
import { MembershipPieChart } from '../compoments/MembershipPie';
import React from 'react';

/**
 * The first page compomentsonentonent of the application.
 * @param {Object} props - The component props.
 * @param {function} props.goToSecondPage - Function to navigate to the second page.
 * @param {Object} props.event - The selected event object.
 * @param {Array} props.events - All events data.
 * @returns {JSX.Element} - The rendered first page compomentsonentonent.
 */

export const FirstPage = ({
  goToSecondPage,
  event,
  events
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, "Presence"), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(EventsSelector, null), /*#__PURE__*/React.createElement(EventPresencesTable, {
    key: event.id,
    data: event.presences
  })), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-info",
    onClick: goToSecondPage
  }, "Invatation Page"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, "Pie graph presence"), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement("th", null, "Event presence"), /*#__PURE__*/React.createElement(MyPieChart, {
    data: event.presences,
    event: event
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(UserPieChart, {
    key: "89d1f4e4-ae0f-11ed-9bd8-0242ac110002",
    userId: "89d1f4e4-ae0f-11ed-9bd8-0242ac110002",
    data: events
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(MembershipPieChart, {
    key: "2d9dd1c8-a4a2-11ed-b9df-0242ac120003",
    groupId: "2d9dd1c8-a4a2-11ed-b9df-0242ac120003",
    data: events
  }), /*#__PURE__*/React.createElement("br", null))));
};