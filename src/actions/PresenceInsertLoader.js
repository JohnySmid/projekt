import { PresenceInsert } from "../queries/PresenceInsert";
import { addPresence } from "../reducers/EventsSlicer";

/**
 * Presence Insert Function
 * Inserts presence data into the database and updates the Redux store with the new presence.
 * @param {string} event_id - The ID of the event.
 * @param {string} user_id - The ID of the user.
 * @param {string} invitation_id - The ID of the invitation.
 * @param {string} presencetype_id - The ID of the presence type.
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
        }
        else {
            console.log("Error in PresenceInsertLoader.\n", json)
        }
        return json
        })
        .catch(error => {
            console.log('Error occurred in PresenceInsertLoader:', error);
          })
)