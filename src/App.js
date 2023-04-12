import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import AllSelect from './comp/AllSelect';


function App() {
  return (
   <div>
    <h1>Events</h1>
    <h2>Jakoby</h2>
    <AllSelect/>
    <Button variant="primary">Prvni</Button>
    <Button variant="primary">Druhy</Button>
    <Button variant="primary">Treti</Button>
   </div>
  );
}

export default App;
