import { EventsDataLoader } from '../actions/EventsDataLoader';
import { EventsSelector } from '../components/EventsSelector';
 
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
      setCurrentPage('second')
    }
    const goToFirstPage = () => {
      setCurrentPage('first')
    }

    
    const eventId = useSelector((state) => state.event)
    const events = useSelector((state) => state.events)
      
    const event = events.find((e) => e.id === eventId)

    if (event) {
      return (
        <div className='container'>
          {
            currentPage === 'first' ? (
              <FirstPage goToSecondPage={goToSecondPage} event={event} events={events} />
            ) : currentPage === 'second' ? (
              <SecondPage goToFirstPage={goToFirstPage} event={event} />
            ) : null
          }
        </div>
      )
    } else {
      return (
        <div className="container">
          <Card>
            <Card.Title>Events</Card.Title>
            <Card.Body>
              <EventsDataLoader />
              <EventsSelector />
            </Card.Body>
          </Card>
        </div>
      );
    }
}