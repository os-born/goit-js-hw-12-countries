import { debounce } from "lodash";
import {refs} from "./refs";
import fetchCountries from "./fetchCountries";
import { markupMethods } from "./markupMethods";

const onFetchError = (error) => {
    alert("Can't find the country!");
}

const onHandleInput = e => {
    e.preventDefault();
    const searchQuery = e.target.value;

    if (!searchQuery) {
        return
    }
    
    fetchCountries(searchQuery)
        .then(markupMethods)
        .catch(onFetchError)
}

refs.countrySearchInput.addEventListener('input', debounce(onHandleInput, 500))