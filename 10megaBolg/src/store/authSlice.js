import { createSlice } from "@reduxjs/toolkit";
// create for track user authentaction

//initial state
const initialState  = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { 
        login: (state, action) => {  // action
            state.status = true;
            state.userData = action.payload.userData;
        },

        logout: (state) => {  // action
            state.status = false;
            state.userData = null;
        }
    }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;