import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    papers: []

}

const paperSlice = createSlice({
    name: "papers",
    initialState,
    reducers: {
        SET_PAPERS: (state, action) => {
            state.papers = action.payload
        }
    }
})

export const { SET_PAPERS } = paperSlice.actions
export default paperSlice.reducer