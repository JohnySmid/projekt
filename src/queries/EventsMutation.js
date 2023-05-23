import { AutorizedFetch} from './AutorizedFetch'


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


export const EventsMutation = (eventID, eventLastChange, eventName) => 
  AutorizedFetch('/gql', {
    body: JSON.stringify(EventsMutationJSON(eventID, eventLastChange, eventName))
  })
