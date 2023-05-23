import { AuthorizedFetch } from './AuthorizedFetch';


const EventsMutationJSON = (id, lastchange, name) => ({
    "query":
        `mutation {
            eventUpdate(event: {
                id: "${id}",
                lastchange: "${lastchange}",
                name: "${name}"})
                {
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
    body: JSON.stringify(EventsMutationJSON(props.event.id, props.event.lastchange, props.event.name))
  })
