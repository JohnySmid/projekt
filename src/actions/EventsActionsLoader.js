import { EventsQuery } from '../queries/EventsQuery';
import { loadData } from '../reducers/EventsSlicer';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';



export const EventsLoader = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);


   const fetchData = () => (dispatch, getState) => (
     EventsQuery()
       .then(response => response.json())
       .then(json => {
         const events = json.data?.eventPage
         if (events) {
           dispatch(loadData(events))
         } else {
           console.log("Error occurred in fetchData function for fetching data from the database.")
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
    <div>
      <button
        className="btn btn-sm btn-success my-1"
        onClick={fetchData}
        disabled={isDataLoaded}
      >
        {isDataLoaded ? 'Data Loaded' : 'Load Data'}
      </button>

      {/* {isDataLoaded && <EventsSelect dataa={dataa} />} */}
    </div>
  );
}