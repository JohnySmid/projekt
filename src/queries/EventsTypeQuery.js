import { AuthorizedFetch } from './AuthorizedFetch'

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
 * Generates the JSON object for retrieving the events type page.
 *
 * @returns {Object} Events type page query JSON object.
 */

export const EventsTypePageQuery = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(EventsTypePageJSON()),
    })