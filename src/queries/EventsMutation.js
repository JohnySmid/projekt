import { AuthorizedFetch } from './AuthorizedFetch';


const EventsMutationJSON = (eventID, eventLastChange, eventName) => ({
    "query":
        `mutation {
            eventUpdate(event: {
                id: "${eventID}",
                lastchange: "${eventLastChange}",
                name: "${eventName}"}) {
                    id,
                    msg,
                    event {
                        id,
                        name,
                        lastchange
                    }
                }
            }
        }`
});


export const EventsMutation = (props) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(EventsMutationJSON(props.eventID, props.eventLastChange, props.eventName))
  })
