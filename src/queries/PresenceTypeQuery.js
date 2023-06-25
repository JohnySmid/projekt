import { AuthorizedFetch } from './AuthorizedFetch'


export const PresenceTypeJSON = () => ({
    "query":
        `query{
            presenceTypePage
            {
                id, 
                name
            }
          }`,
})

/**
 * Fetches the presence types using an authorized request.
 *
 * @returns {Promise} Promise representing the presence type fetch request.
 */
export const PresenceType = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(PresenceTypeJSON()),
    })