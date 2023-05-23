import { useSelector } from 'react-redux';
import  { EventsLoader } from '../actions/EventsActionsLoader';




export const FrontPage = () => {
    const dddata = useSelector((state) => state.dddata);

      return (
       <div className="container">
        <EventsLoader />
       </div>
      );
}