import { AuthorizedFetch } from "./AuthorizedFetch";

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



export const PresenceMutation = (presenceId, lastchange, presenceTypeId, invitationTypeId) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(PresenceMutationJSON(presenceId, lastchange, presenceTypeId, invitationTypeId))
  })
