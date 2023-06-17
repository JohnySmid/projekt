import { AuthorizedFetch } from './AuthorizedFetch'

/**
 * Funkce, ktera stahne groupu na zaklade id
 * @returns 
 */
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
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @returns 
 */
export const GroupByIdQuery = (groupId) =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(GroupByIdJSON(groupId)),
    })