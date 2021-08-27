
const handleErrors = response => {
    if (response.ok) {return response.json();
    }
    throw new Error('Error fetching data');
}

export default function fetchCountries (searchQuery) {
    return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
            .then(handleErrors)
            .catch(error => console.error('Error :>> ', error))
};
