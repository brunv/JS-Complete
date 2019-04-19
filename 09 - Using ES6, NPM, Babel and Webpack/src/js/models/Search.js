import axios from 'axios';
import { keyAPI, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {   
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${keyAPI}&q=${this.query}`); // automatically converts to json
            this.result = res.data.recipes;

            // console.log(this.result);    
        } catch(error) {
            console.log(error);
        }
        
    }
}