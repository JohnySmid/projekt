import { AuthorizedFetch } from './AuthorizedFetch'

/**
 * Generates the JSON object for retrieving events, presences.
 *
 * @returns {Object} eventPage type JSON object.
 */

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
 * Retrieves eventPage using an authorized request.
 *
 * @returns {Promise} Promise representing the groups request.
 */
 
export const EventsQuery = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(EventsQueryJSON()),
    })