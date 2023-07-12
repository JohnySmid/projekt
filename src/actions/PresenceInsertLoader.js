import { PresenceInsert } from "../queries/PresenceInsert";
import { addPresence } from "../reducers/EventsSlicer";

import React from 'react';

/**
 * Presence Insert Function
 * Inserts presence data into the database and updates the Redux store with the new presence.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.event_id - The ID of the event.
 * @param {string} props.user_id - The ID of the user.
 * @param {string} props.invitation_id - The ID of the invitation.
 * @param {string} props.presencetype_id - The ID of the presence type.
 * @param {Function} dispatch - The dispatch function provided by react-redux.
 * @param {Function} getState - The getState function provided by react-redux.
 * @returns {Function} The presence insert loader function.
 */
  
export const PresenceInsertLoader = ({event_id, user_id, invitation_id, presencetype_id}) => (dispatch, getState) => (
    PresenceInsert(event_id, user_id, invitation_id, presencetype_id)
      .then(response => response.json())
      .then(json => {
        const msg = json.data?.presenceInsert.msg
        const event = json.data?.presenceInsert.presence
        if (msg === 'ok') {
            dispatch(addPresence(event))
        } else {
            console.log("Error in PresenceInsertLoader.\n", json)
        }
        return json
      })
      .catch(error => {
        console.log('Error occurred in PresenceInsertLoader:', error)
      })
)