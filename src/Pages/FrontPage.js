import { useSelector } from 'react-redux';
import  { EventsLoader } from '../actions/EventsActionsLoader';
import {  EventsUpdater } from '../actions/EventsMutationLoader';



export const FrontPage = () => {
    const dddata = useSelector((state) => state.dddata);

      return (
       <div className="container">
        < EventsLoader />
        < EventsUpdater/>

       </div>
      );
}