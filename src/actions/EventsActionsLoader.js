import { EventsQuery } from '../queries/EventsQuery';
import { loadData } from '../reducers/EventsSlicer';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const EventsLoader = () => {
  const dispatch = useDispatch();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [dates, setDates] = useState([]);

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

  return (
    <div>
      <button
        className="btn btn-sm btn-success my-1"
        onClick={fetchData}
        disabled={isDataLoaded}
      >
        {isDataLoaded ? 'Data Loaded' : 'Load Data'}
      </button>

      {isDataLoaded && (
        <table>
          <thead>
            <tr>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
          {dates.map((data) => (
            <tr key={data.id}>
              <td>{data.enddate}</td>
              <td>{data.name}</td>
              <td>{data.lastchange}</td>
              <td>
                  {data.presences.map((presence) => (
                    <tr key={presence.id}>
                      <td>{presence.presenceType.name}</td>
                      <td>{presence.invitationType.name}</td>
                      <td>{presence.user.email}</td>
                    </tr>
                ))}
      
              </td>
       </tr>
))}
          </tbody>
        </table>
      )}
    </div>
  );
}