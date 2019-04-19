// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements } from './views/base';

/* Gloal State of the App:
 - Search object
 - Current recipe object
 - Shopping list object
 - Liked recipes    
 */
const state = {};

const controlSearch = async () => {
    // 1. Get the query from view
    const query = searchView.getInput();
    
    if (query) {
        // 2. Create new search object and add to state
        state.search = new Search(query);

        // 3.Prepare UI for results (i.e. Loading...)
        searchView.clearInput();
        searchView.clearResults();
        // TODO
        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        searchView.renderResults(state.search.result);
    }
}

/* Event Listener for Search */
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});