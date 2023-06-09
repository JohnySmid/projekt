import { PresenceMutation } from '../queries/PresenceMutation';
import { updateData } from '../reducers/EventsSlicer';

/**
 * Presence Update Function
 * Update presence data into the database and updates the Redux store with the modify presence.
 * @function
 * @param {Object} props - The component props.
 * @param {string} props.presenceId - The ID of the presence.
 * @param {string} props.lastchange - The last change timestamp.
 * @param {string} props.presenceTypeId - The ID of the presence type.
 * @param {string} props.invitationTypeId - The ID of the invitation type.
 * @returns {Function} The presence update loader function.
 */

export const PresenceMutationLoader = ({presenceId, lastchange, presenceTypeId, invitationTypeId}) => (dispatch, getState) => (
    PresenceMutation(presenceId, lastchange, presenceTypeId, invitationTypeId)
      .then(response => response.json())
      .then(json => {
        console.log('json: ', json)
        const msg = json.data?.presenceUpdate.msg
        // console.log('msg', msg) 
        const updatedData = json.data?.presenceUpdate.presence
        if (msg === 'ok') {
          dispatch(updateData(updatedData))
        } else {
            console.log('Error occured in PresenceMutationLoader: ' + json)
        }
        return json
      })
      .catch(error => {
        console.log('Error occurred in PresenceMutationLoader:', error)
      })
)