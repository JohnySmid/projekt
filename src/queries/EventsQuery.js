import { AuthorizedFetch } from './AuthorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns 
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
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const EventsQuery = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(EventsQueryJSON()),
    })