// Global app controller
import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const keyAPI = 'e6988bf76de58836aee619ca41737816';

    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${keyAPI}&q=${query}`); // already converts to json
        const recipes = res.data.recipes;
        
        console.log(recipes);
    } catch(error) {
        console.log(error);
    }
    
}
getResults('pizza');