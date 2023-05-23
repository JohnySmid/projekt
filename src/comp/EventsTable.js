
import { useState } from 'react';
import { TableRow } from './TableRow';
import { EventsTextBox } from '../comp/EventsTextbox';
import {  EventsUpdater } from '../actions/EventsMutationLoader';

export const EventsTable = ({ dataa }) => {
    const [selectedGroupId, setSelectedGroupId] = useState(null);
  
    const handleGroupSelection = (groupId) => {
      setSelectedGroupId(groupId);
    };

    return (
      <div>
        <table className="table table-hover table-light">
        <thead>
          {dataa.map((data) => (
            <tr key={data.id}>
              <th scope="col">{data.name}</th>
              <th><EventsTextBox/></th>
              <th> < EventsUpdater eventID={data.id} eventLastChange={data.lastchange} eventName="test"/></th>
            </tr>
          ))}
        </thead>
        <tbody>
          {dataa.map((data) => (
            <tr key={data.id}>
              {data.presences.map((presence) => (
                <TableRow
                  key={presence.id}
                  presence={presence}
                  handleGroupSelection={handleGroupSelection}
                  selectedGroupId={selectedGroupId}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  };
