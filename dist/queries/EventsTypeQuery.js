import { AuthorizedFetch } from './AuthorizedFetch';

/**
 * Generates the JSON object for retrieving event types.
 *
 * @returns {Object} events type JSON object.
 */

export const EventsTypePageJSON = () => ({
  "query": `query{
            eventTypePage {
              id,
              name
            }
          }`
});

/**
 * Retrieves events type using an authorized request.
 *
 * @returns {Promise} Promise representing the eventTypePage request.
 */

export const EventsTypePageQuery = () => AuthorizedFetch('/gql', {
  body: JSON.stringify(EventsTypePageJSON())
});