import { AuthorizedFetch } from "./AuthorizedFetch";

/**
 * Generates the JSON object for performing a presence mutation.
 *
 * @param {string} presenceId - The ID of the presence.
 * @param {string} lastchange - The last change timestamp.
 * @param {string} presenceTypeId - The ID of the presence type.
 * @param {string} invitationTypeId - The ID of the invitation type.
 * @returns {Object} Presence mutation JSON object.
 */

const PresenceMutationJSON = (presenceId, lastchange, presenceTypeId, invitationTypeId) => ({
  query: `mutation($presenceId: ID!, $lastchange: DateTime!, $presenceTypeId: ID!, $invitationTypeId: ID!) 
  {
    presenceUpdate(presence: {
      id: $presenceId,
      lastchange: $lastchange,
      presencetypeId: $presenceTypeId,
      invitationId: $invitationTypeId
    }) {
      id
      msg
      presence {
        id
        lastchange
        presenceType {
          id
          name
        }
        invitationType {
          id
          name
        }
        user {
          id
          name
          surname
          email
        }
        event {
          id
        }
      }
    }
  }`,
  variables: {
    presenceId,
    lastchange,
    presenceTypeId,
    invitationTypeId
  }
});


/**
 * Performs a presence mutation using an authorized request.
 *
 * @param {string} presenceId - The ID of the presence.
 * @param {string} lastchange - The last change timestamp.
 * @param {string} presenceTypeId - The ID of the presence type.
 * @param {string} invitationTypeId - The ID of the invitation type.
 * @returns {Promise} Promise representing the presence mutation request.
 */

export const PresenceMutation = (presenceId, lastchange, presenceTypeId, invitationTypeId) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(PresenceMutationJSON(presenceId, lastchange, presenceTypeId, invitationTypeId))
  })
