import { AuthorizedFetch } from './AuthorizedFetch';


const EventsInsertJSON = (eventTypeID, eventName) => ({
    "query":
        `mutation {
            eventInsert(event: {
                eventtypeId: "${eventTypeID}",
                name: "${eventName}"}){
                    id,
                    msg
                }
        }`
});


export const EventsInsert = (props) => 
    AuthorizedFetch('/gql', {
    body: JSON.stringify(EventsInsertJSON(props.eventTypeID, props.eventName))
  })
