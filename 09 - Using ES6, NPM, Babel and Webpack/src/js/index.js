// Global app controller
import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

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
        renderLoader(elements.searchRes);
        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
    }
}

/* Event Listener for Search */
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

/* Event delegation because the element is not there yet */
elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    // console.log(btn);
    
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage);
    }
});