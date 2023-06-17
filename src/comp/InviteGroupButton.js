import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { GroupByIdQuery } from "../queries/GroupByIdQuery";
import { PresenceInsertLoader } from "../actions/PresenceInsertLoader";



export const InviteGroupButton = ({eventId, groupId}) => {
    const dispatch = useDispatch();

    const [GroupMemberships, setGroupMemberships] = useState([]);

    const groupMemebersFetch = () => (dispatch, getState) => {
        // Call the ProjectsQuery function to fetch projects
        GroupByIdQuery(groupId)
          .then(response => response.json())
          .then(json => {
            const GroupMemberships = json.data?.groupById.memberships
            if (GroupMemberships) {
                setGroupMemberships(GroupMemberships)
                //console.log('a:', json.data?.groupById.memberships)
                //console.log('gp member: ', GroupMemberships)
            } else {
              console.log("Error ocurred in GroupByIdQueryFetch function for fetching data from database: \n");
            }
            
            return json
          })
      }

      

         const structureGroupMemberUserId = GroupMemberships.map((member) => {
           if (member.id) {
             return { memberId: member.id, userId: member.user.id };
           }
           return null;
         });




        return (
            <>
                <br />
                <Button className="btn btn-secondary" onClick=
                {() => {
                    
                        console.log("eventID: ", eventId, "groupId: ", groupId);
                        dispatch(groupMemebersFetch(groupId));
                            
                           
                        }
                }>stáhnout members</Button>
                <Button className="btn btn-secondary" onClick=
                {() => {
                         structureGroupMemberUserId.forEach((member) => {
                               console.log('user: ', member.userId)
                               dispatch(PresenceInsertLoader({event_id: eventId, user_id: member.userId, 
                                presencetype_id: "46639812-a79c-11ed-b76e-0242ac110002", invitation_id: "e8713fce-a79c-11ed-b76e-0242ac110002"}))
                             });
                          
                            
                           
                        }
                }>pozvat</Button>
            </>
        );
};
