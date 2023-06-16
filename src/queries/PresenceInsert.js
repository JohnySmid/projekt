import { AuthorizedFetch } from "./AuthorizedFetch";

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



export const PresenceInsert = (event_id, user_id, invitation_id, presencetype_id) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(PresenceInsertJSON(event_id, user_id, invitation_id, presencetype_id))
  })
