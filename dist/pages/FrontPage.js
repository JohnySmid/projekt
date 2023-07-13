import { EventsDataLoader } from '../actions/EventsDataLoader';
import { EventsSelector } from '../compoments/EventsSelector';
import { useSelector } from 'react-redux';
import Card from "react-bootstrap/Card";
import { useState } from 'react';
import { FirstPage } from './FirstPage';
import { SecondPage } from './SecondPage';
import React from 'react';

/**
 * Front page componentonent of the application.
 * Renders either the first page or the second page based on the current state.
 *
 * @returns {JSX.Element} Front page componentonent JSX.
 */

export const FrontPage = () => {
  const [currentPage, setCurrentPage] = useState('first');
  const goToSecondPage = () => {
    setCurrentPage('second');
  };
  const goToFirstPage = () => {
    setCurrentPage('first');
  };
  const eventId = useSelector(state => state.event);
  const events = useSelector(state => state.events);
  const event = events.find(e => e.id === eventId);
  if (event) {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, currentPage === 'first' ? /*#__PURE__*/React.createElement(FirstPage, {
      goToSecondPage: goToSecondPage,
      event: event,
      events: events
    }) : currentPage === 'second' ? /*#__PURE__*/React.createElement(SecondPage, {
      goToFirstPage: goToFirstPage,
      event: event
    }) : null);
  } else {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Card.Title, null, "Events"), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(EventsDataLoader, null), /*#__PURE__*/React.createElement(EventsSelector, null))));
  }
};