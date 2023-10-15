import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
    name: 'auth',

    initialState: {
        status: 'checking', //'checking' , 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,

    },

    reducers: {
        login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.errorMessage = null;
        },

        logout: (state) => {
            state.status = 'checking';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
            state.errorMessage = null;
        },

        setError: (state, action) => {
            state.errorMessage = action.payload;
        },
        
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    }
})


export const { login, logout, checkingCredentials } = authSlice.actions;