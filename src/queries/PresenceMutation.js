import { AuthorizedFetch } from "./AuthorizedFetch";

const PresenceMutationJSON = (presenceId, lastchange, presenceTypeId, invitationTypeId) => ({
    "query":
        `mutation {
            presenceUpdate
            (
              presence: {
                id: "${presenceId}", 
                lastchange: "${lastchange}",  
                presencetypeId: "${presenceTypeId}", 
                invitationId: "${invitationTypeId}"
            }) 
            {
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
                        email
                      }
                      event {
                        id
                      }
              }
            }
          }`
});


export const PresenceMutation = (presenceId, lastchange, presenceTypeId, invitationTypeId) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(PresenceMutationJSON(presenceId, lastchange, presenceTypeId, invitationTypeId))
  })
