


export const addF = (payload) => {
	
	return {
		type: "ADD_TO_FAV",
		payload
	}
}
export const remove = (payload) => {
	
	return {
		type: "REMOVE_FROM_FAV",
		payload
	}
}

export const setIcon = (payload) => {
	return {
		type: "CHANGE_ICON",
		payload
	}
}