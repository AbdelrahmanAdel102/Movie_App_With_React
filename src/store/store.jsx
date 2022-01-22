import { createStore,applyMiddleware } from "redux";
import { FavHandel } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(FavHandel, composeWithDevTools(applyMiddleware(thunk)))
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
console.log("the STORE", store)

export default store;

