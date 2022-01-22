export const setTheme = (payload) => {
	console.log("the ACTION", payload)
	return {
		type: "SET_THEME",
		payload
	}
}