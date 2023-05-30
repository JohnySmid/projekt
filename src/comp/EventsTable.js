import { LogButton } from './Button';
import { EventsPPTable } from './EventsPPTable';
import { useState } from 'react';
import { EventsTextBox } from '../comp/EventsTextbox';
import {  EventsUpdater } from '../actions/EventsMutationLoader';

export const EventsTable = ({ dataa }) => {
  const [selectedGroupIds, setSelectedGroupIds] = useState([]);

  const handleGroupSelection = (groupId) => {
    if (selectedGroupIds.includes(groupId)) {
      setSelectedGroupIds(selectedGroupIds.filter((id) => id !== groupId));
    } else {
      setSelectedGroupIds([...selectedGroupIds, groupId]);
    }
  };

  return (
    <div>
      {dataa.map((data) => (
        <table key={data.id} className="table table-hover table-light">
          <thead>
            <tr>
            <th>
              <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"onChange={ console.log(data.name)}> 
                <option>{data.name}</option>
              </select>
            </th>
              {/*<th scope="col">{data.name}</th>*/}
              <th>
                <EventsTextBox />
              </th>
              <th>
                <EventsUpdater
                  eventID={data.id}
                  eventLastChange={data.lastchange}
                  eventName="Zkouška_test1"
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {data.presences.map((presence) => (
              <EventTableRow
                key={presence.id}
                presence={presence}
                handleGroupSelection={handleGroupSelection}
                isSelected={selectedGroupIds.includes(presence.user.email)}
              />
            ))}
          </tbody>
        </table>
      ))}
    </div>
  );
};

const EventTableRow = ({ presence, handleGroupSelection, isSelected }) => (
  <tr key={presence.id}>
    <td>{presence.user.email}</td>
    <td>
      <LogButton
        onClick={() => handleGroupSelection(presence.user.email)}
        typeofclick={'Vypis'}
      />
    </td>
    <td>{isSelected && <EventsPPTable presence={presence} />}</td>
  </tr>
);