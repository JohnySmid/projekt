import { AuthorizedFetch } from "./AuthorizedFetch";

const PresenceMutationJSON = (presenceId, lastchange, presenceTypeId, invitationId) => ({
    "query":
        `mutation {
            presenceUpdate
            (
              presence: {
                id: "${presenceId}", 
                lastchange: "${lastchange}",  
                presencetypeId: "${presenceTypeId}", 
                invitationId: "${invitationId}"
            }) 
            {
              id
              msg
              presence {
                      id
                user {
                  id
                  email
                }
              }
            }
          }
        }`
});


export const PresenceMutation = (props) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(PresenceMutationJSON(props.presenceId, props.lastchange, props.presenceTypeId, props.invitationId))
  })
