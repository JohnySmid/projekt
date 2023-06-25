import { AuthorizedFetch } from './AuthorizedFetch'

/**
 * Generates the JSON object for retrieving invitation types.
 *
 * @returns {Object} Invitation type JSON object.
 */

export const InvatationTypeJSON = () => ({
    "query":
        `query{
            invitationTypePage
            {
                id, 
                name
            }
          }`,
})

/**
 * Retrieves invitation types using an authorized request.
 *
 * @returns {Promise} Promise representing the invitation types request.
 */

export const InvatationType = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(InvatationTypeJSON()),
    })