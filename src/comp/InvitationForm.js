import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GroupsQuery } from '../queries/GroupsQuery';
import { EventsSelector } from './EventsSelector';
import { InviteGroupButton } from './InviteGroupButton';
import { EventInvitationTable } from './EventInvatationTable';

// Komponenta pro formulář pozvánky
export const InvitationForm = ({ data, fulldata }) => {
    // redux
    const dispatch = useDispatch();
    const [GroupTypeSetter, setGroupTypeSetter] = useState([]); // Stav pro uložení typů skupin

    // Funkce pro získání typů skupin z databáze pomocí asynchronního volání
    const groupTypeFetch = () => (dispatch, getState) => {
      GroupsQuery()
        .then(response => response.json())
        .then(json => {
          // Extrahujte data z groupPage, ? => pokud existují data, jinak nevytvoří chybu
          const GroupTypeSetter = json.data?.groupPage;
          if (GroupTypeSetter) {
            setGroupTypeSetter(GroupTypeSetter);
          } else {
            console.log("Error ocurred in groupTypeFetch function for fetching data from database: \n", console.error());
          }
          return json;
        });
    };

    useEffect(() => {
      dispatch(groupTypeFetch()); // Získání typů skupin po načtení komponenty
    }, []);

    // Strukturování uživatelů na základě přítomnosti
    const structureUsers = data.presences.map((presence) => {
      console.log(presence.user.name);
      if (presence.id) {
        return { userId: presence.user.id, userName: presence.user.name };
      }
      return null;
    });

    const [selectedOption, setSelectedOption] = useState('Choose group'); // Stav pro vybranou možnost výběru skupiny
    const [selectedGroupId, setselectedGroupId] = useState(''); // Stav pro vybrané ID skupiny

    // Funkce pro zachycení změny výběru skupiny
    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
      setselectedGroupId(e.target.value);
    };

    return (
      <Form>
        <div>
          <Form.Label style={{ fontSize: '20px' }}>Event</Form.Label>
          <EventsSelector />
          <br />
          <Form.Group>
            <Form.Label style={{ fontSize: '20px' }}>Invite specific user</Form.Label>
            <br />
            <EventInvitationTable key={data.id} data={data.presences} />
          </Form.Group>
          <br /><br />
          <Form.Group>
            <Form.Label style={{ fontSize: '20px' }}>Invite Group</Form.Label>
            <Form.Select value={selectedOption} onChange={handleOptionChange}>
              <option>Choose group</option>
              {/* Procházení typů skupin a vytvoření možností ve výběrovém poli */}
              {GroupTypeSetter.map((type) => {
                if (type.name) {
                  return <option key={type.id} value={type.id}>{type.name}</option>;
                }
                return null;
              })}
            </Form.Select>
            {/* Zobrazení tlačítka pro pozvání skupiny, pokud je vybrána skupina */}
            {selectedGroupId !== '' ? <InviteGroupButton eventId={data.id} groupId={selectedGroupId} /> : null}
          </Form.Group>
        </div>
      </Form>
    );
};