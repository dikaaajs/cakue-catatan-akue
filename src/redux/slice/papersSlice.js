import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    papers : []

}

const paperSlice = createSlice({
    name : "papers",
    initialState,
    reducers : {
        GET_PAPERS : (state, action) => {
            state.papers = action.payload
        }
    }
})

export const {GET_PAPERS} = paperSlice.actions
export default paperSlice.reducer