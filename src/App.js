import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import AllSelect from './comp/AllSelect';


import SemesterTracker from './comp/SemestrTracker';
import GroupCard from './comp/GroupCard';
import DateRangePicker from './comp/DatePicker';


function App() {
  const handleDateChange = (name, date) => {
    // do something with the updated date
  }
  return (
   <div className="container">
    <div className="row">
      <h1>Events</h1>
    </div>
    <div className="row">
      <AllSelect/>
    </div>
    <div className="row">
      <SemesterTracker />
    </div>
    <div className="row">
      <DateRangePicker />
    </div>
    <div className="row">
    <GroupCard />
    </div>
   </div>
  );
}

export default App;
