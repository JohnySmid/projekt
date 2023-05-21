import { AllSelect } from '../comp/AllSelect'
import { SemesterTracker } from '../comp/SemestrTracker';
import { DateRangePicker } from '../comp/DatePicker';

import { useSelector } from 'react-redux';
import  { EventsLoader } from '../actions/EventsActionsLoader';
import { EventsTable } from '../comp/EventsTable';


export const FrontPage = () => {
    const dddata = useSelector((state) => state.dddata);

      return (
       <div className="container">
        <div className="row">
          <h1>Events</h1>
        </div>
        <div className="row">
          <AllSelect />
        </div>
        <div className="row">
          <SemesterTracker />
        </div>
        <div className="row">
          <DateRangePicker />
        </div>
        <div></div><div></div><div></div>
       
        < EventsLoader />
        {/*<div> < EventsTable events={dddata}/> </div> */}
       </div>
      );
}