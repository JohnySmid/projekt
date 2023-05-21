import { EventsQuery } from '../queries/EventsQuery';
import { loadData } from '../reducers/EventsSlicer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const EventsLoader = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

    const fetchData = async () => {
      try {
        const response = await EventsQuery();
        const data = await response.json();
        if (dispatch(loadData(data.data.eventPage)))
        {

          console.log('dispatch loaddata funguje');
        }
        setIsDataLoaded(true);
      } catch (error) { 
        console.error('Error fetching group names:', error);
      }
    };

  return (
    <div>
      <button className="btn btn-sm btn-success my-1" onClick={fetchData} disabled={isDataLoaded}> {isDataLoaded ? 'Data Loaded' : 'Load Data'}</button>
    </div>
  );
}