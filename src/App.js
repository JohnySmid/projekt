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
   <div class="container">
    <div class="row">
      <h1>Events</h1>
    </div>
    <div class="row">
      <AllSelect/>
    </div>
    <div class="row">
      <SemesterTracker />
    </div>
    <div class="row">
      <DateRangePicker />
    </div>
    <div class="row">
    <GroupCard />
    </div>
   </div>
  );
}

export default App;
