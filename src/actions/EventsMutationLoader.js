import { EventsMutation } from '../queries/EventsMutation';
import { updateData } from '../reducers/EventsSlicer';
import { useDispatch } from 'react-redux';


export const EventsUpdater = (eventID, eventLastChange, eventName) => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await EventsMutation(eventID, eventLastChange, eventName);
      const data = await response.json();
      if (dispatch(updateData(data.data.eventUpdate.event))) {
        console.log('updateData: ', data.data.eventUpdate.msg);
      }
    } catch (error) {
      console.error('Error fetching group names:', error);
    }
  };


  return (
    <button
        className="btn btn-sm btn-success my-1"
        onClick={fetchData}
    >
    Update Data
    </button>
  );
}