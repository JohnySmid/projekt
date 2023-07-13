import { AuthorizedFetch } from './AuthorizedFetch';

/**
 * Generates the JSON object for retrieving groups.
 *
 * @returns {Object} Group query JSON object.
 */

export const GroupsQueryJSON = () => ({
  "query": `query{
            groupPage {
              id
              name
              valid
          }
          }`
});

/**
 * Retrieves groups using an authorized request.
 *
 * @returns {Promise} Promise representing the groups request.
 */

export const GroupsQuery = () => AuthorizedFetch('/gql', {
  body: JSON.stringify(GroupsQueryJSON())
});