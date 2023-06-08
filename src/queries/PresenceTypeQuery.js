import { AuthorizedFetch } from './AuthorizedFetch'


export const PresenceTypeJSON = () => ({
    "query":
        `query{
            presenceTypePage{
                id, 
                name
            }
          }`,
})


export const PresenceType = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(PresenceTypeJSON()),
    })