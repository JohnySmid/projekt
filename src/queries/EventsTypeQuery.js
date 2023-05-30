import { AuthorizedFetch } from './AuthorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @returns 
 */
export const EventsTypePageJSON = () => ({
    "query":
        `query{
            eventTypePage {
              id,
              name
            }
          }`,
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const EventsTypePageQuery = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(EventsTypePageJSON()),
    })