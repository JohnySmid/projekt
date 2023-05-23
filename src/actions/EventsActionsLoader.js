import { EventsQuery } from '../queries/EventsQuery';
import { loadData } from '../reducers/EventsSlicer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { EventsTable } from '../comp/EventsTable';



export const EventsLoader = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [dataa, setDates] = useState([]);

  const fetchData = async () => {
    try {
      const response = await EventsQuery();
      const data = await response.json();
      if (dispatch(loadData(data.data.eventPage))) {
        console.log('Dispatch loadData works', data.data.eventPage);
        setDates(data.data.eventPage); // Set the fetched dates to the state
      }
      setIsDataLoaded(true);
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <button
        className="btn btn-sm btn-success my-1"
        onClick={fetchData}
        disabled={isDataLoaded}
      >
        {isDataLoaded ? 'Data Loaded' : 'Load Data'}
      </button>

      {isDataLoaded && <EventsTable dataa={dataa} />}
    </div>
  );
}