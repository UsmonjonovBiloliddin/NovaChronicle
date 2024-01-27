import { createSlice } from "@reduxjs/toolkit";
import { setItem } from "../helpers/persistance-storage";

const initialState = {
	isLoading: false,
	loggedIn: false,
	user: null,
	error: null,
};

const authService = createSlice({
	name: "auth",
	initialState,
	reducers: {
		signUserStart: (state) => {
			state.isLoading = true;
		},
		signUserSuccess: (state, actions) => {
			state.isLoading = false;
			state.loggedIn = true;
			state.user = actions.payload;
			setItem("token" , actions.payload.token)
			state.error = null
		},
		signUserError: (state , actions) => {
			state.isLoading = false;
			state.error = actions.payload
		},

		logoutUser: state => {
			state.loggedIn = false;
			state.user = null;
		}
	},
});

export const {
	signUserStart,
    signUserSuccess,
    signUserError,
	logoutUser
} = authService.actions;

export default authService.reducer;
