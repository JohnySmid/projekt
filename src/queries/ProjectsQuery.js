import { authorizedFetch } from './authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns 
 */
export const ProjectsQueryJSON = () => ({
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
              }
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const ProjectsQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(ProjectsQueryJSON()),
    })