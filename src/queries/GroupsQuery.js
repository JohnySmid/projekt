import { AuthorizedFetch } from './AuthorizedFetch'


export const GroupsQueryJSON = () => ({
    "query":
        `query{
            groupPage {
              id
              name
              valid
          }
          }`,
})


export const GroupsQuery = () =>
AuthorizedFetch('/gql', {
        body: JSON.stringify(GroupsQueryJSON()),
    })

