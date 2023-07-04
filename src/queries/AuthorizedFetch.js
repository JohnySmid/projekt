const globalFetchParams = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    redirect: 'follow', // manual, *follow, error
}

/**
 * Zapouzdrujici funkce pro fetch, vytvari mezi vrstvu pro komunikace ze serverem
 * @param {string} path - The path for the fetch request.
 * @param {Object} params - The parameters for the fetch request.
 * @returns {Promise} Promise representing the fetch request.
 */

export const AuthorizedFetch = (path, params) => {
    const newParams = {...globalFetchParams, ...params} // allow owerwrite default parameters (globalFetchParams)
    const overridenPath = '/api/gql'
    return (
        fetch(overridenPath, newParams) //params.header should be extended with Authorization TOKEN
    )
}