// Global app controller
import str from './models/Search';
// named export/import
import { add as a, multiply as m, id } from "./views/searchView";
// import * as searchView from './views/searchView';

console.log(`Using imported functions! ${a(id, 2)} and ${m(3, 5)}. ${str}`);
// console.log(`Using imported functions! ${searchView.add(searchView.id, 2)} and ${searchView.multiply(3, 5)}. ${str}`);

