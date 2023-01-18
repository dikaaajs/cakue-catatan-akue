import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    email : null,
    username : null,
    uid : null

}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        // trigerred when user loggedIn
        USER_LOGIN : (state, action) => {
            const {email, username, uid} = action.payload
            state.email = email
            state.username = username
            state.uid = uid

            state.isLoggedIn = true
        },        
    }
})

export const {USER_LOGIN} = authSlice.actions
export default authSlice.reducer