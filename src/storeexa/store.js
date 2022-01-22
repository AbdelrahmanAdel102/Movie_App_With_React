import {createStore} from "redux";

import  {changeTheme} from "./reducer";


const store = createStore(changeTheme)
console.log("the STORE", store)

export default store;

// export defaut = {
	// store, 
	// test,

// }