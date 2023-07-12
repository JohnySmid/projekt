import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { GroupByIdQuery } from "../queries/GroupByIdQuery";
import { PresenceInsertLoader } from "../actions/PresenceInsertLoader";

/**
 * A component that displays buttons to download group members and invite them to an event.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.eventId - The ID of the event.
 * @param {string} props.groupId - The ID of the group.
 * @returns {JSX.Element} - The rendered button component.
 */


export const InviteGroupButton = ({ eventId, groupId }) => {
    const dispatch = useDispatch()

    const [GroupMemberships, setGroupMemberships] = useState([])

    const groupMemebersFetch = () => (dispatch, getState) => {
      // Funkce pro načtení členů skupiny pomocí GroupByIdQuery
      GroupByIdQuery(groupId)
        .then(response => response.json())
        .then(json => {
          const GroupMemberships = json.data?.groupById.memberships
          if (GroupMemberships) {
            setGroupMemberships(GroupMemberships)
          } else {
            console.log("Error ocurred in GroupByIdQueryFetch function for fetching data from database: \n")
          }
          return json;
        });
    };

    const structureGroupMemberUserId = GroupMemberships.map((member) => {
      // Vytvoření struktury pro členské ID a uživatelské ID
      if (member.id) {
        return { memberId: member.id, userId: member.user.id }
      }
      return null
    })

    return (
      <>
        <br />
        <Button className="btn btn-secondary" onClick={() => {
          // Kliknutí na tlačítko "stáhnout members"
          console.log("eventID: ", eventId, "groupId: ", groupId)
          dispatch(groupMemebersFetch(groupId))
        }}>stáhnout members</Button>
        <Button className="btn btn-secondary" onClick={() => {
          // Kliknutí na tlačítko "pozvat"
          structureGroupMemberUserId.forEach((member) => {
            console.log('user: ', member.userId)
            dispatch(PresenceInsertLoader({
              event_id: eventId,
              user_id: member.userId,
              presencetype_id: "46639812-a79c-11ed-b76e-0242ac110002",
              invitation_id: "e8713fce-a79c-11ed-b76e-0242ac110002"
            }))
          })
          // Musíte někde vynulovat hodnotu GroupMemberships?
        }}>pozvat</Button>
      </>
    );
};