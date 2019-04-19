// Global app controller
import Search from './models/Search';

/* Gloal State of the App:
 - Search object
 - Current recipe object
 - Shopping list object
 - Liked recipes    
 */
const state = {};

const controlSearch = async () => {
    // 1. Get the query from view
    const query = 'pizza'; // TODO replace with real query
    
    if (query) {
        // 2. Create new search object and add to state
        state.search = new Search(query);

        // 3.Prepare UI for results (i.e. Loading...)
        // TODO
        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        console.log(state.search.result);
    }
}

/* Event Listener for Search */
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});