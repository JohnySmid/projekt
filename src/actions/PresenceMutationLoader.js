import { PresenceMutation } from '../queries/PresenceMutation';
import { updateData } from '../reducers/PresenceSlicer';

/**
 * Asynchronous action creator that fetches projects.
 * @returns {Function} A function that accepts the 'dispatch' and 'getState' functions from Redux.
 */
export const PresenceMutationLoader = (props) => (dispatch, getState) => {
    console.log(props);
    PresenceMutation(props)
      .then(response => response.json())
      .then(json => {
        const msg = json.data?.presenceUpdate.msg
        const updatedData = json.data?.presenceUpdate.presence
        if (msg === 'ok') {
          dispatch(updateData(updatedData))
        } else {
            console.log('Error occured in PresenceMutationLoader: ' + msg)
        }
        return json
      })
  }