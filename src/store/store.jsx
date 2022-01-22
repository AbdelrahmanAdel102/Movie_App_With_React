import { createStore } from "redux";
import { FavHandel } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(FavHandel, composeWithDevTools())
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
console.log("the STORE", store)

export default store;

// export defaut = {
	// store,
	// test,

// } 