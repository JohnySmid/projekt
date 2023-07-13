import { AuthorizedFetch } from './AuthorizedFetch';

/**
 * Generates the JSON object for retrieving a group by ID.
 *
 * @param {string} groupId - The ID of the group.
 * @returns {Object} The JSON object for the group by ID query.
 */

export const GroupByIdJSON = groupId => ({
  "query": `
    query GroupById($groupId: ID!) {
      groupById(id: $groupId) {
        id
        name
        memberships {
          id
          user {
            id
            name
            surname
            email
            membership {
              id
              group {
                id
                name
              }
            }
          }
        }
      }
    }
  `,
  variables: {
    groupId
  }
});

/**
 * Retrieves a group by ID using an authorized request.
 *
 * @param {string} groupId - The ID of the group.
 * @returns {Promise} A Promise representing the group by ID request.
 */
export const GroupByIdQuery = groupId => AuthorizedFetch('/gql', {
  body: JSON.stringify(GroupByIdJSON(groupId))
});