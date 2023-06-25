import { AuthorizedFetch } from "./AuthorizedFetch";

/**
 * Generates the JSON object for performing a presence insertion.
 *
 * @param {string} event_id - The ID of the event.
 * @param {string} user_id - The ID of the user.
 * @param {string} invitation_id - The ID of the invitation.
 * @param {string} presencetype_id - The ID of the presence type.
 * @returns {Object} Presence insertion JSON object.
 */

const PresenceInsertJSON = (event_id, user_id, invitation_id, presencetype_id) => ({
  query: `mutation ($user_id: ID!, $event_id: ID!, $invitation_id: ID!, $presencetype_id: ID) {
    presenceInsert(
      presence: {userId: $user_id, eventId: $event_id, invitationId: $invitation_id, presencetypeId: $presencetype_id}
    ) {
      id
      msg
      presence {
        event {
          id
          presences {
            id
            lastchange
            invitationType {
              id
              name
            }
            presenceType {
              id
              name
            }
            user {
              id
              name
              surname
              email
            }
          }
        }
      }
    }
  }`,
  variables: {
    event_id,
    user_id,
    invitation_id,
    presencetype_id
  }
});

/**
 * Performs a presence insertion using an authorized request.
 *
 * @param {string} event_id - The ID of the event.
 * @param {string} user_id - The ID of the user.
 * @param {string} invitation_id - The ID of the invitation.
 * @param {string} presencetype_id - The ID of the presence type.
 * @returns {Promise} Promise representing the presence insertion request.
 */

export const PresenceInsert = (event_id, user_id, invitation_id, presencetype_id) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(PresenceInsertJSON(event_id, user_id, invitation_id, presencetype_id))
  })
