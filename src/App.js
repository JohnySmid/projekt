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
   <div>
    <h1>Events</h1>
    <AllSelect/>
    <br></br>
    <SemesterTracker />
    <br></br>
    <DateRangePicker />
    <br></br>
    <GroupCard />
   </div>
  );
}

export default App;
