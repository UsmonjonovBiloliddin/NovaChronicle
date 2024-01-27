export const setItem = (key, data) => {
	try {
        localStorage.setItem(key, data);
	} catch (error) {
		console.log("Error saving Token");
	}
};


export const getItem = (key) => {
	try {
		return localStorage.getItem(key);
	} catch (error) {
		console.log("Error getting Token");

	}
}

export const removeItem = (key) => {
	try {
		localStorage.removeItem(key);
	} catch (error) {
		console.log("Error removing Token");
		
	}
}