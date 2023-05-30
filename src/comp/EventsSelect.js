import {useState} from "react";
import { EventsTable } from "./EventsTable";

export const EventsSelect = ({ dataa }) => {
    const [selectedGroup, setSelectedGroup] = useState('');
  
    const handleGroupSelection = (event) => {
      setSelectedGroup(event.target.value);
    };
  
    return (
      <>
        <select
          className="form-select form-select-lg mb-3"
          aria-label=".form-select-lg example"
          value={selectedGroup}
          onChange={handleGroupSelection}
        >
          <option value="">Select Event</option>
          {dataa.map((e) => (
            <option key={e.id} value={e.name}>
              {e.name}
            </option>
          ))}
        </select>
        {selectedGroup && (
          <EventsTable dataa={dataa} selectedGroup={selectedGroup} />
        )}
      </>
    );
  };