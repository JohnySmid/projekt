import { AuthorizedFetch } from './AuthorizedFetch';

/**
 * Generates the JSON object for retrieve presence types.
 *
 * @returns {Object} presence type JSON object.
 */

export const PresenceTypeJSON = () => ({
  "query": `query{
            presenceTypePage
            {
                id, 
                name
            }
          }`
});

/**
 * Retrieves presence types using an authorized request.
 *
 * @returns {Promise} Promise representing the presence type fetch request.
 */

export const PresenceType = () => AuthorizedFetch('/gql', {
  body: JSON.stringify(PresenceTypeJSON())
});