import { authorizedFetch } from 'queries/authorizedFetch'

/**
 * Funkce, ktera id namapuje na json predstavujici "velky" (podrobny) dotaz na server
 * @param {*} id 
 * @returns 
 */
export const GroupQueryLargeJSON = (id) => ({
    "query":
        `query ($id: ID!) {
            groupById(id: $id) {
                id, name, valid, lastchange
                grouptype { id, name }
                roles {
                    id, user { id, name,surname, email }
                }
                memberships {
                    id, valid, user {
                        id, name, surname, email
                    }
                }
                subgroups {
                    id, name, valid, lastchange, grouptype { id, name }
                }
            }
        }`,
    "variables": {"id": id}
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 * @param {*} id 
 * @returns 
 */
export const GroupQueryLarge = (id) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupQueryLargeJSON(id)),
    })