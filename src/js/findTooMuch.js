import { error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/BrightTheme.css';


export const findTooMuch = () => {
    const myError = error({
        text: "Too many matches found. Please enter a more specific query!",
        delay: 2500,
    });
    return myError;
}

defaultModules.style = 'material';



