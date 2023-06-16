
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GroupsQuery } from '../queries/GroupsQuery';
import { EventsSelector } from './EventsSelector';
import { InviteUserButton } from './InviteUserButton';
import { InviteGroupButton } from './InviteGroupButton';
import { Button } from 'bootstrap';
import { EventInvitationTable } from './EventInvatationTable';



export const InvitationForm = ({data, fulldata}) => {

  // dodělat PresenceImport a hardcode to, ze jejich invitation: "Pozvaný" a presence ""
  // console.log('data', data.presences);
  // redux
  const dispatch = useDispatch();
  const [GroupTypeSetter, setGroupTypeSetter] = useState([]);

  const groupTypeFetch = () => (dispatch, getState) => {
    GroupsQuery()
      .then(response => response.json())
      .then(json => {
        // extract data from groupPage, ? => if data exist, else doesn't create an error
        const GroupTypeSetter = json.data?.groupPage
        if (GroupTypeSetter) {
          setGroupTypeSetter(GroupTypeSetter)
          //console.log(presenceType);
        } else {
          console.log("Error ocurred in groupTypeFetch function for fetching data from database: \n", console.error());
        }
        return json
      })
  }
  useEffect(() => {
    dispatch(groupTypeFetch());
  }, []);

  const structureUsers = data.presences.map((presence) => {
    console.log(presence.user.name);
    if (presence.id) {
      return { userId: presence.user.id, userName: presence.user.name};
      
    }
    return null;
  });
  console.log(structureUsers.userId);
  //const [groupName, setgroupName] = useState(GroupTypeSetter);

  // const strucutreGroup = {
  //   groupId: GroupTypeSetter
  // }
  const [selectedOption, setSelectedOption] = useState('Choose group');
  const [selectedGroupId, setselectedGroupId] = useState('');
  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setselectedGroupId(e.target.value); 
  };
  

  return (
    <Form>
    <div>
      <Form.Label>Events:</Form.Label>
      <EventsSelector/>
  
      <Form.Group>
        <Form.Label style={{ fontSize: '20px' }}>Invite specific user</Form.Label>
        <br />
        <EventInvitationTable key={data.id} data={data.presences}/>
        {/* <InviteUserButton/> */}
      </Form.Group>
      <br /><br />
      <Form.Group>
      <Form.Label style={{ fontSize: '20px' }}>Invite Group</Form.Label>
        {/* <Form.Select value={strucutreGroup.groupId} onChange={(e) => {console.log(e.target.value) && <InviteGroupButton />}}> */}
        <Form.Select value={selectedOption} onChange={handleOptionChange}>  
          {/* <option>Choose group</option> */}
          {GroupTypeSetter.map((type) => {
            if (type.name) {
              return <option key={type.id} value={type.id}>{type.name}</option>;
            }
            return null;
          })}
        </Form.Select>
        { selectedGroupId !== '' ? <InviteGroupButton eventId={data.id} groupId={selectedGroupId} /> : null}
      </Form.Group>
    </div>
    </Form>

    
  );
}