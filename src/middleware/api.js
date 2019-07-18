const API_ROOT = 'https://dev-ddd-test.pantheonsite.io'

const callApi = (endpoint) => {
    const fullURL = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint
    if (process.env !== 'production') {
        console.log(fullURL)
    }
    return fetch(fullURL)
        .then((response) => response.json())
        .catch((error) => {
            return Promise.reject(error)
        });
}

export default callApi
