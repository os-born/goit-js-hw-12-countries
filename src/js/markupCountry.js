import { debounce } from "lodash";
import {refs} from "./refs";
import countryTpl from '../templates/country.hbs'
import fetchCountries from "./fetchCountries";

const makeMarkUp = response => {
    const markup = countryTpl(response);
        refs.country.innerHTML = markup;
        console.log(response);
    // if(response.length === 1){
        
    // } else if (response.length > 1 && response.length < 11){
    //     response.map(country =>  
    //     {const listMarkup = countriesListTpl(response.name)
    //     refs.countriesList.innerHTML = listMarkup;})
        
    // } else {
    //     console.log("Уточните запрос");
    // }
    // console.log(response);
}
const onFetchError = () => console.log('Напишите что-то внятное');

const onHandleInput = e => {
    e.preventDefault();
    const searchQuery = e.target.value;
    
    fetchCountries(searchQuery)
        .then(makeMarkUp)
        .catch(onFetchError)
}

refs.countrySearchInput.addEventListener('input', debounce(onHandleInput, 500))
