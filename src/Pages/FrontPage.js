import { AllSelect } from '../comp/AllSelect'
import { SemesterTracker } from '../comp/SemestrTracker';
import { DateRangePicker } from '../comp/DatePicker';


export const FrontPage = () => {
    const handleDateChange = (name, date) => {
        // do something with the updated date
      }
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
       </div>
      );
}