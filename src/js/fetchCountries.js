
export default function fetchCountries (searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
            .then(handleErrors)
            .then(response => response.json())
};

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}