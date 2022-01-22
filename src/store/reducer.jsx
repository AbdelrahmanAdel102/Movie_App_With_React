
const INITIAL_STATE = {
	fav: [],
	count: 0,
}

export function FavHandel(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD_TO_FAV":
			return {
				...state,
				fav: [...state.fav, action.payload],
				count: state.count + 1,
			}
		case "REMOVE_FROM_FAV":
			return {
				fav: state.fav.filter((movie) => movie != action.payload),
				count: state.count - 1,
			}
		default:
			return state
	}
}