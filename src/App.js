import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import AllSelect from './comp/AllSelect';

import SemesterTracker from './comp/SemestrTracker';
import GroupCard from './comp/GroupCard';


function App() {
  return (
   <div>
    <h1>Events</h1>
    <AllSelect/>
    <SemesterTracker />
    <br></br>
    <br></br>
    <GroupCard />
   </div>
  );
}

export default App;
