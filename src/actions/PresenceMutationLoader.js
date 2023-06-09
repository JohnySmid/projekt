import { PresenceMutation } from '../queries/PresenceMutation';
import { updateData } from '../reducers/EventSlice';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const PresenceMutationLoader = (presenceId, lastchange, presenceTypeId, invitationTypeId) => (dispatch, getState) => {
    PresenceMutation(presenceId, lastchange, presenceTypeId, invitationTypeId)
      .then(response => response.json())
      .then(json => {
        const msg = json.data?.presenceUpdate.msg
        const updatedData = json.data?.presenceUpdate.presence
        console.log("data ", updatedData);
        if (msg === 'ok') {
          dispatch(updateData(updatedData))
        } else {
            console.log('Error occured in PresenceMutationLoader: ' + msg)
        }
        return json
      })
  }