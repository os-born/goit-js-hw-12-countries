import countriesListTpl from '../templates/countriesListTpl.hbs'
import countryTpl from '../templates/countryTpl.hbs'
import { findTooMuch } from './findTooMuch';
import { refs } from './refs';

export const makeMarkupOne = response => {
    const markup = countryTpl(response);
        refs.country.innerHTML = markup;
        console.log(response);
}

const makeListMarkup = response => {
    const markup = countriesListTpl(response);
        refs.countriesList.innerHTML = markup;
        console.log(response);
}

export const markupMethods = (countryArr) =>{

    if(countryArr.length === 1){
        makeMarkupOne(countryArr);
        refs.countrySearchInput.value = '';
        return;
    } 

    if (countryArr.length > 1 && countryArr.length < 11){
        makeListMarkup(countryArr);
    } 
    
    else 
        findTooMuch()
}



