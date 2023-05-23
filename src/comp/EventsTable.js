
import { useState } from 'react';
import { TableRow } from './TableRow';
import { EventsTextBox } from '../comp/EventsTextbox';
import {  EventsUpdater } from '../actions/EventsMutationLoader';

export const EventsTable = ({ dataa }) => {
    const [selectedGroupId, setSelectedGroupId] = useState(null);
  
    const handleGroupSelection = (groupId) => {
      setSelectedGroupId(groupId);
    };

    const event = {
      id: "45b2df80-ae0f-11ed-9bd8-0242ac110002",
      lastchange: "2023-05-22T07:41:27.417197",
      name: "Test"
    }

    return (
      <div>
        <table className="table table-hover table-light">
        <thead>
          {dataa.map((data) => (
            <tr key={data.id}>
              <th scope="col">{data.name}</th>
              <th><EventsTextBox/></th>
              <th><EventsUpdater event={event}/></th>
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
