import { debounce } from "lodash";
import {refs} from "./refs";
import fetchCountries from "./fetchCountries";
import { markupMethods } from "./markupMethods";

const onFetchError = () => {
    alert("No matches! Enter better request!");
}

const onHandleInput = e => {
    e.preventDefault();
    const searchQuery = e.target.value.trim();

    if (!searchQuery) {
        return
    }
    
    fetchCountries(searchQuery)
        .then(markupMethods)
        .catch(onFetchError)
}

refs.countrySearchInput.addEventListener('input', debounce(onHandleInput, 500))