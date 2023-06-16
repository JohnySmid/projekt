import { PresenceInsert } from "../queries/PresenceInsert";
import { addPresence } from "../reducers/EventsSlicer";


export const PresenceInsertLoader = ({event_id, user_id, invitation_id, presencetype_id}) => (dispatch, getState) => {
    PresenceInsert(event_id, user_id, invitation_id, presencetype_id)
    .then(response => response.json())
    .then(json => {
        const msg = json.data?.presenceInsert.msg
        const event = json.data?.presenceInsert.presence;
        if (msg === 'ok') {
             dispatch(addPresence(event));
        }
        else {
            console.log("Error in PresenceInsertLoader.")
        }
        return json
        })
}