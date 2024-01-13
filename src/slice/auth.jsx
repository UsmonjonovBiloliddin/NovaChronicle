import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error: null
}

const authService = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        //Login
        loginStart: (state) => {
            state.isLoading = true
        },
        loginSuccess: (state , actions) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = actions.payload
        },
        loginError: (state) => {
            state.isLoading = false
            state.error = "Error"
        },

        // Register 
        registerStart: (state) => {
            state.isLoading = true
        },
        registerSuccess: (state , actions) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = actions.payload
        },
        registerError: (state) => {
            state.isLoading = false
            state.error = "Error"
        },
    }
})

export const {loginStart, loginSuccess, loginError , registerStart , registerSuccess , registerError } = authService.actions

export default authService.reducer