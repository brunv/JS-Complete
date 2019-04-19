import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(query) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const keyAPI = 'e6988bf76de58836aee619ca41737816';
    
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${keyAPI}&q=${this.query}`); // automatically converts to json
            this.result = res.data.recipes;

            // console.log(this.result);    
        } catch(error) {
            console.log(error);
        }
        
    }
}