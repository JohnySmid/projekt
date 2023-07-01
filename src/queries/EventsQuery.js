import { AuthorizedFetch } from './AuthorizedFetch'

export const EventsQueryJSON = () => ({
    "query":
        `query {
            eventPage {
              id
              name
              lastchange
              startdate
              enddate
              presences {
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
                  membership {
                    id
                    group{
                      id
                      name
                    }
                  }
                }
                event {
                  id
                }
              }
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns {Promise} Promise representing the events query request.
 */
export const EventsQuery = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(EventsQueryJSON()),
    })