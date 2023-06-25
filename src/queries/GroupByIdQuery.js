import { AuthorizedFetch } from './AuthorizedFetch'


export const GroupByIdJSON = (groupId) => ({
    "query":
        `query{
            groupById(id: "${groupId}") {
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
          }`
});


/**
 * Retrieves a group by ID using an authorized request.
 *
 * @param {string} groupId - The ID of the group.
 * @returns {Promise} Promise representing the group by ID request.
 */
export const GroupByIdQuery = (groupId) =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(GroupByIdJSON(groupId)),
    })