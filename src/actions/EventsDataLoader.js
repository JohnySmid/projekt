import { EventsQuery } from '../queries/EventsQuery';
import { loadData } from '../reducers/EventsSlicer';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

import React from 'react';


/**
 * Function that stores fetch function that loads events data.
 *  @function
 */
 
export const EventsDataLoader = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

   /**
   * Fetches events data from the server and dispatches it to the store.
   * @function
   * @param {Function} dispatch - The dispatch function provided by react-redux.
   * @param {Function} getState - The getState function provided by react-redux.
   * @returns {Promise} A Promise that resolves to the JSON response from the server.
   */

   const fetchData = () => (dispatch, getState) => (
     EventsQuery()
       .then(response => response.json())
       .then(json => {
         const events = json.data?.eventPage
         if (events) {
           dispatch(loadData(events))
         } else {
           console.log("Error occurred in fetchData function for fetching data from the database. ", json)
         }

         setIsDataLoaded(true)
         return json
       })
       .catch(error => {
         console.error("Error occurred in fetchData function:", error)
       })
   )

   useEffect(() => {
     dispatch(fetchData());
   }, [])

  return (
    <>
     {isDataLoaded ? <p>Data loaded.</p> : <p>Loading data...</p>}
    </>
  );
}