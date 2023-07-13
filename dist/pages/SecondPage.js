import { InvitationForm } from '../compoments/InvitationForm';
import Card from "react-bootstrap/Card";
import { Button } from 'react-bootstrap';
import React from 'react';

/**
 * componentonent for the second page of the application.
 * Renders an invitation form.
 *
 * @param {Object} props - The component props.
 * @param {Function} props.goToFirstPage - Function to navigate back to the first page.
 * @param {Object} props.event - Event data.
 * @returns {JSX.Element} Second page componentonent JSX.
 */

export const SecondPage = ({
  goToFirstPage,
  event
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, "Invatation"), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(InvitationForm, {
    data: event
  })), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(Button, {
    className: "btn btn-info",
    onClick: goToFirstPage
  }, "Presence Page"))));
};