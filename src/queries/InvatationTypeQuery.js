import { AuthorizedFetch } from './AuthorizedFetch'


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


export const InvatationType = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(InvatationTypeJSON()),
    })