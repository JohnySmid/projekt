
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { GroupsQuery } from '../queries/GroupsQuery';

export const InvitationForm = () => {

  

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

  console.log(GroupTypeSetter.id)
  const [groupName, setgroupName] = useState(GroupTypeSetter);

  return (
    <Form>
      <div>
        <Form.Label>Groups:</Form.Label>
        <Form.Select >
          {GroupTypeSetter.map((type) => {
            if (type.name) {
              return <option key={type.id} value={type.id}>{type.name}</option>;
            }
            return null;
          })}
        </Form.Select>
      </div>
    </Form>
  );
}