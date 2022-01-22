
const INITIAL_STATE = {
	theme: "dark"
}



export function changeTheme (state = {theme: "dark"}, action) {
	console.log("the REDUCER", state)
	console.log("the REDUCER", action)


		switch (action.type){
			case "SET_THEME":
				return {
					...state,
					theme: action.payload
				}
			default: 
			return state
		}


}